import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var CourseEditComponent = /** @class */ (function () {
    function CourseEditComponent(route, router, CourseService, AuthService) {
        this.route = route;
        this.router = router;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
    }
    CourseEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id).subscribe(function (tcourse) {
            _this.editCourse = tcourse;
        }, function (error) { _this.errorMsg = error; });
        this.editCourse.courseImgPath = "..\\assets\\img\\" + this.editCourse.courseImgPath;
    };
    CourseEditComponent.prototype.UpdateCourse = function () {
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        if (fileToUpload.name == null) {
            fileToUpload.name = this.editCourse.courseImgPath;
        }
        var formData = new FormData();
        formData.append('criD', this.editCourse.id.toString());
        formData.append('Name', this.editCourse.name);
        formData.append('StartDate', this.editCourse.startDate.toString());
        formData.append('Description', this.editCourse.description);
        formData.append('FileData', fileToUpload);
        this.CourseService.EditCourse(this.editCourse.id, formData).subscribe();
        this.router.navigate(['/courses']);
    };
    tslib_1.__decorate([
        ViewChild("fileInput"),
        tslib_1.__metadata("design:type", Object)
    ], CourseEditComponent.prototype, "fileInputVariable", void 0);
    CourseEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-course-edit',
            templateUrl: './course-edit.component.html',
            styleUrls: ['./course-edit.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, CourseService, AuthService])
    ], CourseEditComponent);
    return CourseEditComponent;
}());
export { CourseEditComponent };
//# sourceMappingURL=course-edit.component.js.map