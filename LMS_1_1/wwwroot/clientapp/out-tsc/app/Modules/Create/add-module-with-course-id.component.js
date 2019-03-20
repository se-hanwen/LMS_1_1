import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { takeUntil } from 'rxjs/operators';
import { ModuleService } from '../module.service';
var AddModuleWithCourseIdComponent = /** @class */ (function () {
    function AddModuleWithCourseIdComponent(route, db, cd, messhandler, CourseService, ModuleService, router) {
        this.route = route;
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
        this.CourseService = CourseService;
        this.ModuleService = ModuleService;
        this.router = router;
        this.unsubscribe = new Subject();
        this.CourseId = "";
        this.errorMessage = "";
    }
    AddModuleWithCourseIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CourseId = this.route.snapshot.paramMap.get('id');
        this.messhandler.CourseStartDate
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.coursestartdate = status;
            _this.cd.markForCheck();
        });
    };
    AddModuleWithCourseIdComponent.prototype.Create = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        this.ModuleService.CreateModule(this.Module)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            if (status) {
                _this.errorMessage = "Module " + _this.Module.name + " saved";
            }
            _this.cd.markForCheck();
        }, function (err) { return _this.errorMessage = err; });
    };
    AddModuleWithCourseIdComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AddModuleWithCourseIdComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-module-with-course-id',
            templateUrl: './add-module-with-course-id.component.html',
            styleUrls: ['./add-module-with-course-id.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AuthService,
            ChangeDetectorRef,
            LoginMessageHandlerService,
            CourseService,
            ModuleService,
            Router])
    ], AddModuleWithCourseIdComponent);
    return AddModuleWithCourseIdComponent;
}());
export { AddModuleWithCourseIdComponent };
//# sourceMappingURL=add-module-with-course-id.component.js.map