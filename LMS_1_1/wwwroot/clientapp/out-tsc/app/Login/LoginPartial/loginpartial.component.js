import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';
var LoginpartialComponent = /** @class */ (function () {
    function LoginpartialComponent(AuthService, router, cd, messhandler) {
        this.AuthService = AuthService;
        this.router = router;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new Subject();
    }
    LoginpartialComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.isAuthenticated=this.AuthService.isAuthenticated;
         this.isTeacher=this.AuthService.isTeacher;
     */
        this.messhandler.CurrUserAuth
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.isAuthenticated = status;
            _this.cd.markForCheck();
        });
        this.messhandler.CurrUserTeacher
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.isTeacher = status;
            _this.cd.markForCheck();
        });
        // this.AuthService.isAuthenticated.subscribe( i => this.isAuthenticated=i);
        //this.AuthService.isTeacher.subscribe(i => this.isTeacher=i);
        this.AuthService.firstName
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (fn) {
            _this.firstName = fn;
            _this.cd.markForCheck();
        });
        this.AuthService.lastName
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (ln) {
            _this.lastName = ln;
            _this.cd.markForCheck();
        });
    };
    LoginpartialComponent.prototype.logout = function () {
        this.AuthService.logout();
        this.router.navigate(['/Account/Login']);
    };
    LoginpartialComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    LoginpartialComponent = tslib_1.__decorate([
        Component({
            selector: 'loginpartial',
            templateUrl: './loginpartial.component.html',
            styleUrls: ['./loginpartial.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router,
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], LoginpartialComponent);
    return LoginpartialComponent;
}());
export { LoginpartialComponent };
//# sourceMappingURL=loginpartial.component.js.map