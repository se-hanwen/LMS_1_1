import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
var detailList = /** @class */ (function () {
    function detailList(route, CourseService, AuthService, cd, messhandler) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new Subject();
        this.savesubs = new Array();
    }
    detailList.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        /*this.AuthService.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( i =>{
             this.isTeacher=i;
             this.cd.markForCheck();
        }
        );*/
        this.CourseService.getCourseAndModulebyId(this.courseid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (course) {
            _this.course = course;
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    detailList.prototype.TogggelCollapse = function (mid) {
        var _this = this;
        if (this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded == " show") {
            this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded = "";
            if (this.savesubs.find(function (t) { return t[0] == mid; })) {
                this.savesubs.find(function (t) { return t[0] == mid; })[1].unsubscribe();
                this.savesubs.splice(this.savesubs.indexOf(this.savesubs.find(function (t) { return t[0] == mid; })), 1);
            }
        }
        else {
            this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded = " show";
            this.messhandler.SendModulid(mid);
            var mod = this.course.modules.find(function (m) { return m.id.toString() == mid; });
            this.messhandler.SendModulStartDate(mod.startDate);
            this.messhandler.SendModulEndDate(mod.endDate);
            this.messhandler.SendModulName(mod.name);
            var temp = this.CourseService.getActivitybymodulId(mid)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(function (activities) {
                _this.course.modules.find(function (m) { return m.id.toString() == mid; }).activities = activities;
                _this.cd.markForCheck();
            }, function (error) { return _this.errorMessage = error; });
            if (this.savesubs.find(function (t) { return t[0] == mid; })) {
                this.savesubs.find(function (t) { return t[0] == mid; })[1] = temp;
            }
            else {
                this.savesubs.push([mid, temp]);
            }
        }
    };
    detailList.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], detailList.prototype, "courseid", void 0);
    detailList = tslib_1.__decorate([
        Component({
            selector: "detail_list",
            templateUrl: "detail_list.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            CourseService,
            AuthService,
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], detailList);
    return detailList;
}());
export { detailList };
//# sourceMappingURL=detail_list.component.js.map