import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var LoginpartialComponent = /** @class */ (function () {
    function LoginpartialComponent(AuthService) {
        this.AuthService = AuthService;
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
    };
    LoginpartialComponent = tslib_1.__decorate([
        Component({
            selector: 'loginpartial',
            templateUrl: './loginpartial.component.html',
            styleUrls: ['./loginpartial.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], LoginpartialComponent);
    return LoginpartialComponent;
}());
export { LoginpartialComponent };
//# sourceMappingURL=loginpartial.component.js.map