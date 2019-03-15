import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
var CourseDeleteComponent = /** @class */ (function () {
    function CourseDeleteComponent(route, CourseService, router) {
        this.route = route;
        this.CourseService = CourseService;
        this.router = router;
    }
    CourseDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id).subscribe(function (tcourse) { _this.course = tcourse; }, function (error) { _this.errorMsg = error; });
    };
    CourseDeleteComponent.prototype.ConfirmedDelete = function () {
        this.CourseService.DeleteCourse(this.course.id).subscribe();
        this.router.navigate(['/courses']);
    };
    CourseDeleteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-course-delete',
            templateUrl: './course-delete.component.html',
            styleUrls: ['./course-delete.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService, Router])
    ], CourseDeleteComponent);
    return CourseDeleteComponent;
}());
export { CourseDeleteComponent };
//# sourceMappingURL=course-delete.component.js.map