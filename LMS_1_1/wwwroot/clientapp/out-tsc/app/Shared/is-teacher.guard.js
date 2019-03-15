import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
var IsTeacherGuard = /** @class */ (function () {
    function IsTeacherGuard(auth, router) {
        this.auth = auth;
        this.router = router;
        this.isTeacher = false;
    }
    IsTeacherGuard.prototype.canLoad = function (route, segments) {
        if (!(this.auth.IsTeacher())) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsTeacherGuard.prototype.canActivate = function () {
        //  this.auth.isTeacher.subscribe((i:Boolean) => {return i});
        if (!(this.auth.IsTeacher())) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsTeacherGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], IsTeacherGuard);
    return IsTeacherGuard;
}());
export { IsTeacherGuard };
//# sourceMappingURL=is-teacher.guard.js.map