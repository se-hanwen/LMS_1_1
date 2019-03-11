import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course-list/course.service';
var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(route, CourseService) {
        this.route = route;
        this.CourseService = CourseService;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.CourseService.getCourseAllById(id).subscribe(function (course) {
            _this.course = course;
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseDetailComponent = tslib_1.__decorate([
        Component({
            templateUrl: './course-detail.component.html',
            styleUrls: ['./course-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
export { CourseDetailComponent };
//# sourceMappingURL=course-detail.component.js.map