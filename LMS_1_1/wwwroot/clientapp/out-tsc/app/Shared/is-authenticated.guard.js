import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
var IsAuthenticatedGuard = /** @class */ (function () {
    function IsAuthenticatedGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    IsAuthenticatedGuard.prototype.canLoad = function (route, segments) {
        if (!(this.auth.isAuthenticated)) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsAuthenticatedGuard.prototype.canActivate = function () {
        //  this.auth.isTeacher.subscribe((i:Boolean) => {return i});
        if (!(this.auth.isAuthenticated)) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsAuthenticatedGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], IsAuthenticatedGuard);
    return IsAuthenticatedGuard;
}());
export { IsAuthenticatedGuard };
//# sourceMappingURL=is-authenticated.guard.js.map