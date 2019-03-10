import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course-list/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course-list/course.service';
import { Guid } from 'guid-typescript';

@Component({
 
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

    course: ICourse;
    errorMessage: string;
    constructor(private route: ActivatedRoute, private CourseService: CourseService) { }

    ngOnInit(): void {

        let id: string = this.route.snapshot.paramMap.get('id');
        this.CourseService.getCourseById(id).subscribe(
                course => {
                    this.course = course;
                },
                error => this.errorMessage = <any>error
            );



        
  }

}
