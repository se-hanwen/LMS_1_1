import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course-list/course';
import { ActivatedRoute, Data } from '@angular/router';
import { CourseService } from '../course-list/course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
    course: ICourse;
    errorMessage: string;
    courseForm: FormGroup;
    @ViewChild("fileInput") fileInputVariable: any;
    constructor(private route: ActivatedRoute, private CourseService: CourseService) { }

  ngOnInit() {
    }
    
    
    

    register(formValues) {

       
     
        let fileToUpload = this.fileInputVariable.nativeElement.files[0];
        let formData = new FormData();
       
        formData.append('Name', formValues.name);
        formData.append('StartDate', formValues.startDate);
        formData.append('Description', formValues.description);
        formData.append('FileData', fileToUpload);
        console.log(formData);
        this.CourseService.createCourse(formData).subscribe(
            (result) => {
                console.log(result);
                console.log("Created a Course");
            },
            error => this.errorMessage = <any>error
        );
    }

    
}
