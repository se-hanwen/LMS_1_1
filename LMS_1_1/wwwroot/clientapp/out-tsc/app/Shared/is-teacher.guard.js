import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { takeUntil } from 'rxjs/operators';
var IsTeacherGuard = /** @class */ (function () {
    function IsTeacherGuard(auth, router) {
        this.auth = auth;
        this.router = router;
        this.unsubscribe = new Subject();
        this.isTeacher = false;
        this.CheckTeacher();
    }
    IsTeacherGuard.prototype.canLoad = function (route, segments) {
        return this.isTeacher;
    };
    IsTeacherGuard.prototype.CheckTeacher = function () {
        var _this = this;
        this.auth.isTeacher
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) {
            _this.isTeacher = i;
            if (!i) {
                _this.router.navigate(['/Account/Login']);
            }
        });
    };
    IsTeacherGuard.prototype.canActivate = function () {
        return this.isTeacher;
    };
    IsTeacherGuard.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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