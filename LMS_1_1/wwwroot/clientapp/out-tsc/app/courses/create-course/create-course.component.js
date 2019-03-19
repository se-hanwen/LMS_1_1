import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { mimeTypeValidator } from '../mimeType.validator';
var CreateCourseComponent = /** @class */ (function () {
    function CreateCourseComponent(route, CourseService, router, cd) {
        this.route = route;
        this.CourseService = CourseService;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new Subject();
        this.isSubmitted = false;
        this.showMsg = false;
    }
    CreateCourseComponent.prototype.ngOnInit = function () {
        this.courseForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
            startDate: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
            description: new FormControl('', [Validators.required]),
            fileData: new FormControl('', [Validators.required, mimeTypeValidator(this.fileInputVariable.nativeElement.files[0].type)])
        });
    };
    Object.defineProperty(CreateCourseComponent.prototype, "formControls", {
        get: function () { return this.courseForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateCourseComponent.prototype.register = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.courseForm.invalid) {
            return;
        }
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        var formData = new FormData();
        var MIMEtype = fileToUpload.type.split("/")[0];
        console.log(MIMEtype);
        formData.append('Name', this.courseForm.value.name);
        formData.append('StartDate', this.courseForm.value.startDate);
        formData.append('Description', this.courseForm.value.description);
        formData.append('FileData', fileToUpload);
        console.log(formData);
        this.CourseService.createCourse(formData)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (result) {
            _this.isSubmitted = false;
            _this.courseForm.reset();
            _this.router.navigate(['/courses']);
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    CreateCourseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService,
            Router, ChangeDetectorRef])
    ], CreateCourseComponent);
    return CreateCourseComponent;
}());
export { CreateCourseComponent };
//# sourceMappingURL=create-course.component.js.map