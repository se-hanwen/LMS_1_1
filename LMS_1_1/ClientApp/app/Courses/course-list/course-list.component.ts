import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ICourse } from '../course';
import { CourseService } from '../course.service';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

    courses: ICourse[] = [];
    errorMessage: string;
    
    constructor(private CourseService: CourseService) {
        
    }

     
    ngOnInit(): void {
        this.CourseService.getCourses().subscribe(
            courses => {
                this.courses = courses;
              
            },
            error => this.errorMessage = <any>error
        );
    
           
       
  }

}
