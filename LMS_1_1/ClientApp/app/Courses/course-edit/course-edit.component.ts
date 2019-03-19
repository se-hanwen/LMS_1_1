import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../course';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
    editCourse: ICourse;
    errorMsg: string;
    @ViewChild("fileInput") fileInputVariable: any;
    isTeacher: boolean;

    constructor(private route: ActivatedRoute, private router: Router, private CourseService: CourseService, private AuthService: AuthService) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id).subscribe(
            tcourse => { 
                this.editCourse = tcourse;
            },
            error => { this.errorMsg = <any>error; });
        //this.editCourse.courseImgPath = "..\\assets\\img\\" + this.editCourse.courseImgPath;
    } 

    UpdateCourse() {
        let fileToUpload = (this.fileInputVariable.nativeElement.files.length == 0) ?
            (new File([new Blob()], this.editCourse.courseImgPath)) : this.fileInputVariable.nativeElement.files[0];

        let formData = new FormData();
        formData.append('criD', this.editCourse.id.toString());
        formData.append('Name', this.editCourse.name);
        formData.append('StartDate', this.editCourse.startDate.toString());
        formData.append('Description', this.editCourse.description);
        formData.append('FileData', fileToUpload);

        this.CourseService.EditCourse(this.editCourse.id, formData).subscribe();
        this.router.navigate(['/courses']);
    }

}
