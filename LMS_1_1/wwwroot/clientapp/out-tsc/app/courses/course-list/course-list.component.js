import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var CourseListComponent = /** @class */ (function () {
    // private userId: string;
    function CourseListComponent(CourseService, AuthService, cd) {
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.unsubscribe = new Subject();
        this.courses = [];
        this.isTeacher = false;
        //   this.AuthService.userid.subscribe( i => this.userId=i);
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
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
            .subscribe(function (courses) {
            _this.courses = courses;
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CourseListComponent = tslib_1.__decorate([
        Component({
            selector: 'course-list',
            templateUrl: './course-list.component.html',
            styleUrls: ['./course-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CourseService, AuthService,
            ChangeDetectorRef])
    ], CourseListComponent);
    return CourseListComponent;
}());
export { CourseListComponent };
//# sourceMappingURL=course-list.component.js.map