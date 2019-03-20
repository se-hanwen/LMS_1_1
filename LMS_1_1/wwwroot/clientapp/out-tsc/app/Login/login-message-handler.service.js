import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var LoginMessageHandlerService = /** @class */ (function () {
    function LoginMessageHandlerService() {
        this.startstring = "";
        // To add And make choose to save
        this.useridSource = new BehaviorSubject(this.startstring);
        this.userid = this.useridSource.asObservable();
        // to 
        this.HasChoosedCoursesSource = new BehaviorSubject(false);
        this.HasChoosedCourses = this.HasChoosedCoursesSource.asObservable();
        this.IsteacherSource = new BehaviorSubject(false);
        this.Isteacher = this.IsteacherSource.asObservable();
        this.HasSavedCouresSource = new BehaviorSubject(false);
        this.HasSavedCoures = this.HasSavedCouresSource.asObservable();
        this.CourseSavedSource = new BehaviorSubject(this.startstring);
        this.CourseSaved = this.CourseSavedSource.asObservable();
        this.ConfirmSource = new BehaviorSubject(this.startstring);
        this.ConfirmMessage = this.ConfirmSource.asObservable();
        this.CurrUserAuthSource = new BehaviorSubject(false);
        this.CurrUserAuth = this.CurrUserAuthSource.asObservable();
        this.CurrUserTeacherSource = new BehaviorSubject(false);
        this.CurrUserTeacher = this.CurrUserTeacherSource.asObservable();
        this.ConfirmGoOnUrlSource = new BehaviorSubject([]);
        this.ConfirmGoOnUrl = this.ConfirmGoOnUrlSource.asObservable();
        this.ConfirmGoOnMessageSource = new BehaviorSubject(this.startstring);
        this.ConfirmGoOnMessage = this.ConfirmGoOnMessageSource.asObservable();
        this.ConfirmGoBackUrlSource = new BehaviorSubject([]);
        this.ConfirmGoBackUrl = this.ConfirmGoBackUrlSource.asObservable();
        this.CourseStartDateSource = new BehaviorSubject(null);
        this.CourseStartDate = this.CourseStartDateSource.asObservable();
        this.CourseidSource = new BehaviorSubject(null);
        this.Courseid = this.CourseidSource.asObservable();
    }
    LoginMessageHandlerService.prototype.SendUserId = function (userid) {
        this.useridSource.next(userid == null ? '' : userid);
        return true;
    };
    LoginMessageHandlerService.prototype.SendHasChoosedCourses = function (status) {
        this.HasChoosedCoursesSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendIsteacher = function (status) {
        this.IsteacherSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendHasSavedCoures = function (status) {
        this.HasSavedCouresSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendConfirm = function (arg) {
        this.ConfirmSource.next(arg == null ? '' : arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCourseSaved = function (arg) {
        this.CourseSavedSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCourseStartDate = function (arg) {
        this.CourseStartDateSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCourseid = function (arg) {
        this.CourseidSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCurrUserAuth = function (status) {
        this.CurrUserAuthSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCurrUserTeacher = function (status) {
        this.CurrUserTeacherSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendConfirmGoOnUrl = function (arg) {
        this.ConfirmGoOnUrlSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendConfirmGoOnMessage = function (arg) {
        this.ConfirmGoOnMessageSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendConfirmGoBackUrl = function (arg) {
        this.ConfirmGoBackUrlSource.next(arg);
        return true;
    };
    LoginMessageHandlerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LoginMessageHandlerService);
    return LoginMessageHandlerService;
}());
export { LoginMessageHandlerService };
//# sourceMappingURL=login-message-handler.service.js.map