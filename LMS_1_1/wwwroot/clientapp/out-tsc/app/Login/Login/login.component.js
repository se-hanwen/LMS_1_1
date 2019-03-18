import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { User } from '../login';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(db, router, cd, messhandler) {
        this.db = db;
        this.router = router;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new Subject();
        this.user = new User();
        this.errorMessage = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user.userName = "";
        this.user.passWord = "";
        this.user.rememberMe = false;
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.errorMessage = "";
        this.db.login(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (success) {
            if (success) {
                _this.messhandler.SendCurrUserAuth(_this.db.isAuthenticated);
                _this.messhandler.SendCurrUserTeacher(_this.db.isTeacher);
                _this.router.navigate(["courses"]);
            }
            _this.cd.markForCheck();
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router,
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map