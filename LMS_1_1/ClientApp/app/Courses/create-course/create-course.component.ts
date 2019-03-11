import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course-list/course';
import { ActivatedRoute, Data } from '@angular/router';
import { CourseService } from '../course-list/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
    course: ICourse;
    errorMessage: string;
    constructor(private route: ActivatedRoute, private CourseService: CourseService) { }

  ngOnInit() {
    }
    name: string;
    startDate: Data;
    description: string;

    Create(formValues) {

        this.course = {
            name: formValues.name,
            startDate: formValues.startDate,
            description: formValues.description
        }
        console.log(formValues.name);
       /* this.CourseService.createCourse(this.course).subscribe(
            (result) => {
                console.log(result);
                console.log("Created a Course");
            },
            error => this.errorMessage = <any>error
        );*/
    }
}
