import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ICourse } from '../course';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy  {

    private unsubscribe : Subject<void> = new Subject();
    courses: ICourse[] = [];
    errorMessage: string;
    isTeacher: boolean=false;
   // private userId: string;
    constructor(private CourseService: CourseService, private AuthService : AuthService
        ,private cd: ChangeDetectorRef
        , private router: Router) {
     //   this.AuthService.userid.subscribe( i => this.userId=i);
    }

     
    ngOnInit(): void {

        if(!this.AuthService.isAuthenticated)
        {
            this.router.navigate(['/Account/Login']);
        }
        else
        {
            this.isTeacher=this.AuthService.isTeacher;
        /* this.AuthService.isTeacher
            .pipe(takeUntil(this.unsubscribe))
            .subscribe( i =>
                { 
                    this.isTeacher=i;
                    this.cd.markForCheck();
                }
            );*/

            this.CourseService.getCourses()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                courses => {
                    this.courses = courses;
                    this.cd.markForCheck();
                },
                error => this.errorMessage = <any>error
            );  
        } 
    }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }  
}
