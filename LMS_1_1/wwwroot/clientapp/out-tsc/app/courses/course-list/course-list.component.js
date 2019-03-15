import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var CourseListComponent = /** @class */ (function () {
    // private userId: string;
    function CourseListComponent(CourseService, AuthService) {
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.courses = [];
        //   this.AuthService.userid.subscribe( i => this.userId=i);
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        this.CourseService.getCourses().subscribe(function (courses) {
            _this.courses = courses;
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseListComponent = tslib_1.__decorate([
        Component({
            selector: 'course-list',
            templateUrl: './course-list.component.html',
            styleUrls: ['./course-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CourseService, AuthService])
    ], CourseListComponent);
    return CourseListComponent;
}());
export { CourseListComponent };
//# sourceMappingURL=course-list.component.js.map