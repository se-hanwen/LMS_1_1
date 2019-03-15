import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Guid } from 'guid-typescript';
import { DocumentService } from 'ClientApp/app/documents/document.service';
import { IDocument } from 'ClientApp/app/documents/document';

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
        this.CourseService.getCourseAllById(id).subscribe(
                course => {
                    this.course = course;
                },
                error => this.errorMessage = <any>error
        );

    }
  }


