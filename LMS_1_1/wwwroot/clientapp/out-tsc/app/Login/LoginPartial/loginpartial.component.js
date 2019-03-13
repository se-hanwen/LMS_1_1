import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var LoginpartialComponent = /** @class */ (function () {
    function LoginpartialComponent(AuthService) {
        this.AuthService = AuthService;
    }
    LoginpartialComponent.prototype.ngOnInit = function () {
        this.isSignedIn = false; //this.AuthService.isAuthenticated();
        this.isTeacher = this.AuthService.IsTeacher();
        this.firstName = this.AuthService.FirstName;
        this.lastName = this.AuthService.LastName;
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