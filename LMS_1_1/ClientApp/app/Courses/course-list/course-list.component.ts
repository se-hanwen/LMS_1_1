import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ICourse } from '../course';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

    courses: ICourse[] = [];
    errorMessage: string;
    isTeacher: boolean;
    private userId: string;
    constructor(private CourseService: CourseService, private AuthService : AuthService) {
        this.AuthService.userid.subscribe( i => this.userId=i);
    }

     
    ngOnInit(): void {
        this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);

        this.CourseService.getCourses(this.userId).subscribe(
            courses => {
                this.courses = courses;
              
            },
            error => this.errorMessage = <any>error
        );
    
           
       
  }

}
