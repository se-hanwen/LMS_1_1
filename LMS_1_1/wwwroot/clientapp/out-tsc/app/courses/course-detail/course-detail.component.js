import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(route, CourseService, AuthService) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        var id = this.route.snapshot.paramMap.get('id');
        this.CourseService.getCourseAndModulebyId(id).subscribe(function (course) {
            _this.course = course;
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseDetailComponent = tslib_1.__decorate([
        Component({
            templateUrl: './course-detail.component.html',
            styleUrls: ['./course-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService, AuthService])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
export { CourseDetailComponent };
//# sourceMappingURL=course-detail.component.js.map