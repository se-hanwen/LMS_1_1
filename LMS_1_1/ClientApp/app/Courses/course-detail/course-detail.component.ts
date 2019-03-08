import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course-list/course';

@Component({
 
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

    course: ICourse;

    constructor() { }

  ngOnInit() {
  }

}
