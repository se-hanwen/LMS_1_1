import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    // ...
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.IsTeacher = function () {
        var token = localStorage.getItem('token');
        if (this.jwtHelper.isTokenExpired(token))
            return false;
        var decodedToken = this.jwtHelper.decodeToken(token);
        decodedToken.claims;
        return true;
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [JwtHelperService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map