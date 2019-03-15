import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ICourse, course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Guid } from 'guid-typescript';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
 
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy  {

    course: ICourse;
    errorMessage: string;
    isTeacher: boolean;

    private unsubscribe : Subject<void> = new Subject();
    constructor(private route: ActivatedRoute, private CourseService: CourseService, private AuthService : AuthService
      ,private cd: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.AuthService.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( i =>
          { 
            this.isTeacher=i;
            this.cd.markForCheck(); 
          });
        let id: string = this.route.snapshot.paramMap.get('id');
        this.CourseService.getCourseAndModulebyId(id)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
                course => {
                    this.course = course;
                    this.cd.markForCheck();
                },
                error => this.errorMessage = <any>error
            );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
