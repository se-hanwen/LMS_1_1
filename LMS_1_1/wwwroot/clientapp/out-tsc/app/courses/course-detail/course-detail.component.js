import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(route, CourseService, AuthService, cd) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.unsubscribe = new Subject();
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isTeacher
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) {
            _this.isTeacher = i;
            _this.cd.markForCheck();
        });
        var id = this.route.snapshot.paramMap.get('id');
        this.CourseService.getCourseAndModulebyId(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (course) {
            _this.course = course;
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseDetailComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CourseDetailComponent = tslib_1.__decorate([
        Component({
            templateUrl: './course-detail.component.html',
            styleUrls: ['./course-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService, AuthService,
            ChangeDetectorRef])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
export { CourseDetailComponent };
//# sourceMappingURL=course-detail.component.js.map