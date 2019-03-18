import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var CourseDeleteComponent = /** @class */ (function () {
    function CourseDeleteComponent(route, CourseService, router, cd) {
        this.route = route;
        this.CourseService = CourseService;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new Subject();
    }
    CourseDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (tcourse) {
            _this.course = tcourse;
            _this.cd.markForCheck();
        }, function (error) { _this.errorMsg = error; });
    };
    //ConfirmedDelete() {
    //    this.CourseService.DeleteCourse(this.course.id)
    //    .pipe(takeUntil(this.unsubscribe))
    //    .subscribe( c => {
    //        this.cd.markForCheck();
    //        this.router.navigate(['/courses']);
    //    });
    //}
    CourseDeleteComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CourseDeleteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-course-delete',
            templateUrl: './course-delete.component.html',
            styleUrls: ['./course-delete.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService, Router,
            ChangeDetectorRef])
    ], CourseDeleteComponent);
    return CourseDeleteComponent;
}());
export { CourseDeleteComponent };
//# sourceMappingURL=course-delete.component.js.map