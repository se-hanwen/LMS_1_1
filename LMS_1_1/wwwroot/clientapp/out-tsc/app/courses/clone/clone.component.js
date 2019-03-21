import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CloneCourseModel } from '../course';
import { CourseService } from '../course.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeTypeValidator } from '../mimeType.validator';
var CloneComponent = /** @class */ (function () {
    function CloneComponent(route, cd, router, CourseService, AuthService) {
        this.route = route;
        this.cd = cd;
        this.router = router;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.unsubscribe = new Subject();
        this.cloneCourse = new CloneCourseModel();
        this.Courseid = "";
        this.isSubmitted = false;
        this.showMsg = false;
    }
    CloneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Courseid = this.route.snapshot.paramMap.get("id");
        this.courseForm = new FormGroup({
            id: new FormControl(''),
            name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
            startDate: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
            description: new FormControl('', [Validators.required]),
            fileData: new FormControl('', [Validators.required, mimeTypeValidator()])
        });
        this.CourseService.getCourseById(this.Courseid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (course) {
            _this.cloneCourse.id = course.id;
            _this.cloneCourse.name = course.name;
            _this.cloneCourse.description = course.description;
            _this.cloneCourse.newDate = course.startDate.toLocaleString().substring(0, 10);
            _this.cloneCourse.courseImgPath = course.courseImgPath;
            _this.courseForm.patchValue({ id: course.id,
                name: course.name,
                startDate: _this.cloneCourse.newDate,
                description: course.description
            });
            /*  this.courseForm.setValue({});
              this.courseForm.setValue({});
              this.courseForm.setValue({});
              this.courseForm.setValue({});*/
            _this.cd.markForCheck();
        });
    };
    CloneComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    Object.defineProperty(CloneComponent.prototype, "formControls", {
        get: function () { return this.courseForm.controls; },
        enumerable: true,
        configurable: true
    });
    CloneComponent.prototype.register = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.courseForm.invalid) {
            return;
        }
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        var formData = new FormData();
        /* let MIMEtype = fileToUpload.type.split("/")[0];
         console.log(MIMEtype);*/
        formData.append("ID", this.cloneCourse.id.toString());
        formData.append('Name', this.courseForm.value.name);
        formData.append('newDate', this.courseForm.value.startDate);
        formData.append('Description', this.courseForm.value.description);
        formData.append('FileData', fileToUpload);
        console.log(formData);
        this.CourseService.cloneCourse(formData)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (result) {
            _this.isSubmitted = false;
            _this.router.navigate(['/courses']);
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    CloneComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    tslib_1.__decorate([
        ViewChild("fileInput"),
        tslib_1.__metadata("design:type", Object)
    ], CloneComponent.prototype, "fileInputVariable", void 0);
    CloneComponent = tslib_1.__decorate([
        Component({
            selector: 'app-clone',
            templateUrl: './clone.component.html',
            styleUrls: ['./clone.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ChangeDetectorRef, Router,
            CourseService, AuthService])
    ], CloneComponent);
    return CloneComponent;
}());
export { CloneComponent };
//# sourceMappingURL=clone.component.js.map