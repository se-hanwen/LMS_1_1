import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Module } from '../../Courses/course';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
import { takeUntil } from 'rxjs/operators';
import { ModuleService } from '../module.service';
var AddModuleWithCourseIdComponent = /** @class */ (function () {
    function AddModuleWithCourseIdComponent(route, db, cd, messhandler
    // ,private CourseService: CourseService
    , ModuleService
    //  ,  private router: Router
    ) {
        this.route = route;
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
        this.ModuleService = ModuleService;
        this.unsubscribe = new Subject();
        // get course set up coursestatdate
        this.Module = new Module();
        this.CourseId = "";
        this.errorMessage = "";
        this.CourseName = "";
    }
    AddModuleWithCourseIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.Courseid
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Module.courseid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.CourseStartDate
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.coursestartdate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.CourseName
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.CourseName = status;
            _this.cd.markForCheck();
        });
    };
    AddModuleWithCourseIdComponent.prototype.gotDate = function () {
        if (this.Module.startDate != null && this.Module.endDate != null) {
            this.messhandler.SendDubbId(this.Module.courseid);
            this.messhandler.SendDubbType("Module");
            this.messhandler.SendDubbStart(new Date(this.Module.startDate + ":00.000Z"));
            this.messhandler.SendDubbEnd(new Date(this.Module.endDate + ":00.000Z"));
        }
        // post data
    };
    AddModuleWithCourseIdComponent.prototype.Create = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (this.Module.startDate.valueOf() < this.coursestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "Start date on module may not be before course start date (" + this.coursestartdate + ")";
        }
        if (this.Module.endDate.valueOf() < this.coursestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on module may not be before course start date (" + this.coursestartdate + ")";
        }
        if (this.Module.endDate.valueOf() < this.Module.startDate.valueOf()) {
            this.errorMessage = this.errorMessage + " A module must end after it's start";
        }
        if (this.errorMessage == "") {
            this.ModuleService.CreateModule(this.Module)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.errorMessage = "Module " + _this.Module.name + " saved";
                }
                _this.cd.markForCheck();
            }, function (err) { return _this.errorMessage = err; });
        }
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
            LoginMessageHandlerService
            // ,private CourseService: CourseService
            ,
            ModuleService
            //  ,  private router: Router
        ])
    ], AddModuleWithCourseIdComponent);
    return AddModuleWithCourseIdComponent;
}());
export { AddModuleWithCourseIdComponent };
//# sourceMappingURL=add-module-with-course-id.component.js.map