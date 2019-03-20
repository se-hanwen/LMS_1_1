import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Activity } from 'ClientApp/app/Courses/course';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
import { ActivitiesService } from '../activities.service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
var EditComponent = /** @class */ (function () {
    function EditComponent(db, cd, route, messhandler, ActivititesService) {
        this.db = db;
        this.cd = cd;
        this.route = route;
        this.messhandler = messhandler;
        this.ActivititesService = ActivititesService;
        this.unsubscribe = new Subject();
        this.Activity = new Activity();
        this.errorMessage = "";
        this.ModuleName = "";
        this.Activityid = "";
        this.Courseid = "";
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Activityid = this.route.snapshot.paramMap.get("id"); // null if no hit?
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
        this.ActivititesService.GetActivity(this.Activityid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (resp) {
            _this.Activity = resp;
            _this.cd.markForCheck();
        });
    };
    EditComponent.prototype.gotDate = function () {
        if (this.Activity.startDate != null && this.Activity.endDate != null) {
            this.messhandler.SendDubbId(this.Activity.moduleid);
            this.messhandler.SendDubbType("Activity");
            this.messhandler.SendDubbStart(new Date(this.Activity.startDate + ":00.000Z"));
            this.messhandler.SendDubbEnd(new Date(this.Activity.endDate + ":00.000Z"));
        }
        // post data
    };
    EditComponent.prototype.Register = function (theForm) {
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
            this.ActivititesService.EditActivity(this.Activity.id, this.Activity)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.errorMessage = "Activity " + _this.Activity.name + " Activity";
                }
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
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ChangeDetectorRef, ActivatedRoute,
            LoginMessageHandlerService,
            ActivitiesService])
    ], EditComponent);
    return EditComponent;
}());
export { EditComponent };
//# sourceMappingURL=edit.component.js.map