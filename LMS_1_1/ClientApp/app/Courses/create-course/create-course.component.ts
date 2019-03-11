import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course-list/course';
import { ActivatedRoute, Data } from '@angular/router';
import { CourseService } from '../course-list/course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
    course: ICourse;
    errorMessage: string;
    courseForm: FormGroup;
    constructor(private route: ActivatedRoute, private CourseService: CourseService) { }

  ngOnInit() {
    }
    
    
    

    register(formValues) {

        console.log(formValues)
        let fileToUpload = <File>formValues.fileData;
        let formData = new FormData();

        formData.append('name', formValues.name);
        formData.append('startDate', formValues.startDate);
        formData.append('description', formValues.description);
        formData.append('fileData', fileToUpload, fileToUpload.name);
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
