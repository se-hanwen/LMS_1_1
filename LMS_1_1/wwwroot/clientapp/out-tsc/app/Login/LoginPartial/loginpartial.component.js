import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Router } from '@angular/router';
var LoginpartialComponent = /** @class */ (function () {
    function LoginpartialComponent(AuthService, router) {
        this.AuthService = AuthService;
        this.router = router;
    }
    LoginpartialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isAuthenticated.subscribe(function (i) { return _this.isAuthenticated = i; });
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        this.AuthService.firstName.subscribe(function (fn) { return _this.firstName = fn; });
        this.AuthService.lastName.subscribe(function (ln) { return _this.lastName = ln; });
    };
    LoginpartialComponent.prototype.logout = function () {
        this.AuthService.logout();
        this.router.navigate(['/Account/Login']);
    };
    LoginpartialComponent = tslib_1.__decorate([
        Component({
            selector: 'loginpartial',
            templateUrl: './loginpartial.component.html',
            styleUrls: ['./loginpartial.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], LoginpartialComponent);
    return LoginpartialComponent;
}());
export { LoginpartialComponent };
//# sourceMappingURL=loginpartial.component.js.map