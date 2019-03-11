import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course-list/course.service';
import { ViewChild } from '@angular/core';
var CreateCourseComponent = /** @class */ (function () {
    function CreateCourseComponent(route, CourseService) {
        this.route = route;
        this.CourseService = CourseService;
    }
    CreateCourseComponent.prototype.ngOnInit = function () {
    };
    CreateCourseComponent.prototype.register = function (formValues) {
        var _this = this;
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        var formData = new FormData();
        formData.append('Name', formValues.name);
        formData.append('StartDate', formValues.startDate);
        formData.append('Description', formValues.description);
        formData.append('FileData', fileToUpload);
        console.log(formData);
        this.CourseService.createCourse(formData).subscribe(function (result) {
            console.log(result);
            console.log("Created a Course");
        }, function (error) { return _this.errorMessage = error; });
    };
    tslib_1.__decorate([
        ViewChild("fileInput"),
        tslib_1.__metadata("design:type", Object)
    ], CreateCourseComponent.prototype, "fileInputVariable", void 0);
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