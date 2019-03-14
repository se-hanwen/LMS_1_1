import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Guid } from 'guid-typescript';
import { AuthService } from 'ClientApp/app/auth/auth.service';

@Component({
 
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

    course: ICourse;
    errorMessage: string;
    isTeacher: boolean;
    constructor(private route: ActivatedRoute, private CourseService: CourseService, private AuthService : AuthService) { }

    ngOnInit(): void {
        this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);
        let id: string = this.route.snapshot.paramMap.get('id');
        this.CourseService.getCourseAllById(id).subscribe(
                course => {
                    this.course = course;
                },
                error => this.errorMessage = <any>error
            );



        
  }

}
