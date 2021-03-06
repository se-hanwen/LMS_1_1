import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { course } from '../course';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var CourseEditComponent = /** @class */ (function () {
    function CourseEditComponent(route, router, CourseService, AuthService) {
        this.route = route;
        this.router = router;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.editCourse = new course();
    }
    CourseEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id).subscribe(function (tcourse) {
            var tmppath;
            if (tcourse != null || tcourse.courseImgPath != null) {
                tmppath = "";
            }
            else {
                var tmppath_1 = tcourse.courseImgPath.substr(tcourse.courseImgPath.lastIndexOf('\\') + 1);
            }
            //tcourse.courseImgPath = tcourse.courseImgPath.split('\\')[3];
            _this.editCourse = tcourse;
            _this.editCourse.courseImgPath = tmppath;
        }, function (error) { _this.errorMsg = error; });
        console.log("XXXXXXXXXXXXXX=>" + this.editCourse.courseImgPath);
    };
    CourseEditComponent.prototype.UpdateCourse = function () {
        var fileToUpload = (this.fileInputVariable.nativeElement.files.length == 0) ?
            (new File([new Blob()], this.editCourse.courseImgPath)) : this.fileInputVariable.nativeElement.files[0];
        this.selectFilename = this.editCourse.courseImgPath.substr(this.editCourse.courseImgPath.lastIndexOf("\\") + 1);
        console.log("XXXXXXXXXXXXX====>" + this.editCourse.courseImgPath);
        console.log("XXXXXXXXXXXXX====>" + this.selectFilename);
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
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
            CourseService, AuthService])
    ], CourseEditComponent);
    return CourseEditComponent;
}());
export { CourseEditComponent };
//# sourceMappingURL=course-edit.component.js.map