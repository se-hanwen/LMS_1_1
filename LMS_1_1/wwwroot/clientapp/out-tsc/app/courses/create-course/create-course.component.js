import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course-list/course.service';
var CreateCourseComponent = /** @class */ (function () {
    function CreateCourseComponent(route, CourseService) {
        this.route = route;
        this.CourseService = CourseService;
    }
    CreateCourseComponent.prototype.ngOnInit = function () {
    };
    CreateCourseComponent.prototype.Create = function (formValues) {
        this.course = {
            name: formValues.name,
            startDate: formValues.startDate,
            description: formValues.description
        };
        console.log(formValues.name);
        /* this.CourseService.createCourse(this.course).subscribe(
             (result) => {
                 console.log(result);
                 console.log("Created a Course");
             },
             error => this.errorMessage = <any>error
         );*/
    };
    CreateCourseComponent = tslib_1.__decorate([
        Component({
            selector: 'app-create-course',
            templateUrl: './create-course.component.html',
            styleUrls: ['./create-course.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService])
    ], CreateCourseComponent);
    return CreateCourseComponent;
}());
export { CreateCourseComponent };
//# sourceMappingURL=create-course.component.js.map