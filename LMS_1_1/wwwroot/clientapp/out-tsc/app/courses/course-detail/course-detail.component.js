import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(route, CourseService, AuthService, cd, partipantservice, messhandler) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.partipantservice = partipantservice;
        this.messhandler = messhandler;
        this.isTeacher = false;
        this.showpartipantlist = false;
        this.showpartipantlistmsg = "Show";
        this.unsubscribe = new Subject();
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        /*this.AuthService.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( i =>
          {
            this.isTeacher=i;
            this.cd.markForCheck();
          });*/
        var id = this.route.snapshot.paramMap.get('id');
        this.messhandler.SendCourseid(id);
        this.CourseService.getCourseAndModulebyId(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (course) {
            _this.course = course;
            _this.messhandler.SendCourseStartDate(course.startDate);
            _this.messhandler.SendCourseName(course.name);
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseDetailComponent.prototype.toggelPartipantList = function () {
        if (this.showpartipantlist) {
            this.showpartipantlist = false;
            this.showpartipantlistmsg = "Show";
        }
        else {
            this.showpartipantlist = true;
            this.showpartipantlistmsg = "Hide";
        }
        this.partipantservice.SendPartipantList(this.showpartipantlist);
    };
    CourseDetailComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CourseDetailComponent = tslib_1.__decorate([
        Component({
            templateUrl: './course-detail.component.html',
            styleUrls: ['./course-detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService, AuthService,
            ChangeDetectorRef,
            PartipantService,
            LoginMessageHandlerService])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
export { CourseDetailComponent };
//# sourceMappingURL=course-detail.component.js.map