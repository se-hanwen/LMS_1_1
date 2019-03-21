import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Module } from 'ClientApp/app/Courses/course';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
import { ModuleService } from '../module.service';
import { takeUntil } from 'rxjs/operators';
var EditComponent = /** @class */ (function () {
    function EditComponent(route, db, cd, messhandler
    // ,private CourseService: CourseService
    , ModuleService) {
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
        this.Moduleid = "";
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Moduleid = this.route.snapshot.paramMap.get("id"); // null if no hit?
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
        this.ModuleService.GetModule(this.Moduleid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (resp) {
            _this.Module = resp;
            _this.cd.markForCheck();
        });
    };
    EditComponent.prototype.gotDate = function () {
        if (this.Module.startDate != null && this.Module.endDate != null) {
            this.messhandler.SendDubbId(this.Module.courseid);
            this.messhandler.SendDubbType("Module");
            this.messhandler.SendDubbStart(new Date(this.Module.startDate + ":00.000Z"));
            this.messhandler.SendDubbEnd(new Date(this.Module.endDate + ":00.000Z"));
        }
        // post data
    };
    EditComponent.prototype.Register = function (theForm) {
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
            this.ModuleService.EditCreateModule(this.Module.id, this.Module)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(function (status) {
                _this.errorMessage = "Module updated";
                _this.cd.markForCheck();
            }, function (err) { return _this.errorMessage = err; });
        }
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    EditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AuthService,
            ChangeDetectorRef,
            LoginMessageHandlerService
            // ,private CourseService: CourseService
            ,
            ModuleService])
    ], EditComponent);
    return EditComponent;
}());
export { EditComponent };
//# sourceMappingURL=edit.component.js.map