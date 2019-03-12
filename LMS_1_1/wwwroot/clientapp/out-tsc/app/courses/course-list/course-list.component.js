import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CourseService } from '../course.service';
var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(CourseService) {
        this.CourseService = CourseService;
        this.courses = [];
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        tslib_1.__metadata("design:paramtypes", [CourseService])
    ], CourseListComponent);
    return CourseListComponent;
}());
export { CourseListComponent };
//# sourceMappingURL=course-list.component.js.map