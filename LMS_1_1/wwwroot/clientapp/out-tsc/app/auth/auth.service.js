import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenData } from './tokenData';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.tokenData = new tokenData();
        this.url = "https://localhost:44396";
        this._isTeacher = "";
    }
    // ...public jwtHelper: JwtHelperService,
    AuthService.prototype.ngOnInit = function () {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return this.tokenData.token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "tokenExpiration", {
        get: function () {
            return this.tokenData.tokenExpiration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "FirstName", {
        get: function () {
            return this.tokenData.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "LastName", {
        get: function () {
            return this.tokenData.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "Userid", {
        get: function () {
            return this.tokenData.userid;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post(this.url + "/account/createtoken", creds)
            .pipe(map(function (response) {
            var tokenInfo = response;
            _this.tokenData.token = tokenInfo.token;
            _this.tokenData.tokenExpiration = tokenInfo.expiration;
            _this.tokenData.isTeacher = tokenInfo.isTeacher;
            _this.tokenData.firstName = tokenInfo.FirstName;
            _this.tokenData.lastName = tokenInfo.LastName;
            _this.tokenData.userid = tokenInfo.Userid;
            return true;
        }));
    };
    AuthService.prototype.logout = function () {
        this.tokenData = new tokenData();
    };
    AuthService.prototype.isAuthenticated = function () {
        return !(this.tokenData.token.length == 0 && this.tokenData.tokenExpiration > new Date());
    };
    AuthService.prototype.IsTeacher = function () {
        if (this.isAuthenticated()) {
            if (this.tokenData.isTeacher == "Teacher")
                return true;
            return false;
        }
        return false;
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map