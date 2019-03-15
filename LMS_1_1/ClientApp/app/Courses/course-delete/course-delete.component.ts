import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../course';
import { CourseService } from '../course.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit, OnDestroy  {

    course: ICourse;
    errorMsg: string;
    private unsubscribe : Subject<void> = new Subject();

    constructor(private route: ActivatedRoute, private CourseService: CourseService, private router: Router
        ,private cd: ChangeDetectorRef) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
            tcourse => { 
                this.course = tcourse;
                this.cd.markForCheck();
            },
            error => { this.errorMsg = <any>error; });
    }

    ConfirmedDelete() {
        this.CourseService.DeleteCourse(this.course.id)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( c => {
            this.cd.markForCheck();
            this.router.navigate(['/courses']);
        });
        
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


}
