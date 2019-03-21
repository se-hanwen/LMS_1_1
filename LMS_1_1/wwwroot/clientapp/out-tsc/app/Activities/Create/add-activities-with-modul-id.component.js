import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Activity } from 'ClientApp/app/Courses/course';
import { Subject } from 'rxjs';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
import { takeUntil } from 'rxjs/operators';
import { ActivitiesService } from '../activities.service';
var AddActivitiesWithModulIdComponent = /** @class */ (function () {
    function AddActivitiesWithModulIdComponent(db, cd, messhandler, ActivititesService) {
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
        this.ActivititesService = ActivititesService;
        this.unsubscribe = new Subject();
        this.Activity = new Activity();
        this.errorMessage = "";
        this.ModuleName = "";
        this.Courseid = "";
    }
    AddActivitiesWithModulIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.SendDubbId(this.Activity.moduleid);
        this.messhandler.SendDubbType("Activity");
        this.messhandler.SendDubbStart(new Date(this.Activity.startDate + ":00.000Z"));
        this.messhandler.SendDubbEnd(new Date(this.Activity.endDate + ":00.000Z"));
        this.messhandler.Modulid
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Activity.moduleid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.Courseid
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Courseid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulStartDate
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.Modulestartdate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulEndDate
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.Moduleenddate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulName
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.ModuleName = status;
            _this.cd.markForCheck();
        });
        this.ActivititesService.getActitityTypes()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (resp) {
            _this.ActivityTypes = resp;
            _this.cd.markForCheck();
        });
    };
    AddActivitiesWithModulIdComponent.prototype.gotDate = function () {
        if (this.Activity.startDate != null && this.Activity.endDate != null) {
            this.messhandler.SendDubbId(this.Activity.moduleid);
            this.messhandler.SendDubbType("Activity");
            this.messhandler.SendDubbStart(new Date(this.Activity.startDate + ":00.000Z"));
            this.messhandler.SendDubbEnd(new Date(this.Activity.endDate + ":00.000Z"));
        }
        // post data
    };
    AddActivitiesWithModulIdComponent.prototype.Create = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (new Date(this.Activity.startDate + ":00").valueOf() < this.Modulestartdate.valueOf() + 1) {
            var asd = this.Activity.startDate.valueOf();
            var msd = this.Modulestartdate.valueOf();
            this.errorMessage = this.errorMessage + "Start date on activity may not be before module start date (" + this.Modulestartdate + ")";
        }
        if (new Date(this.Activity.endDate + ":59").valueOf() < this.Modulestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on activity may not be before module start date (" + this.Modulestartdate + ")";
        }
        if (new Date(this.Activity.startDate + ":00").valueOf() > this.Moduleenddate.valueOf()) {
            this.errorMessage = this.errorMessage + "Start date on activity may not be after module end date (" + this.Moduleenddate + ")";
        }
        if (new Date(this.Activity.endDate + ":59").valueOf() > this.Moduleenddate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on activity may not be after module end date (" + this.Moduleenddate + ")";
        }
        if (this.Activity.endDate.valueOf() < this.Activity.startDate.valueOf()) {
            this.errorMessage = this.errorMessage + " A module must end after it's start";
        }
        if (this.errorMessage == "") {
            this.ActivititesService.CreateActivity(this.Activity)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.errorMessage = "Activity " + _this.Activity.name + " created";
                }
                _this.cd.markForCheck();
            }, function (err) { return _this.errorMessage = err; });
        }
    };
    AddActivitiesWithModulIdComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AddActivitiesWithModulIdComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-activities-with-modul-id',
            templateUrl: './add-activities-with-modul-id.component.html',
            styleUrls: ['./add-activities-with-modul-id.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ChangeDetectorRef,
            LoginMessageHandlerService,
            ActivitiesService])
    ], AddActivitiesWithModulIdComponent);
    return AddActivitiesWithModulIdComponent;
}());
export { AddActivitiesWithModulIdComponent };
//Activity.moduleid
//ModuleName
//# sourceMappingURL=add-activities-with-modul-id.component.js.map