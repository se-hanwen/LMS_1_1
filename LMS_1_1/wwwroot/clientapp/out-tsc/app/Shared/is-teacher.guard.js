import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
var IsTeacherGuard = /** @class */ (function () {
    function IsTeacherGuard(auth) {
        this.auth = auth;
    }
    IsTeacherGuard.prototype.canActivate = function (route, state) {
        return this.auth.IsTeacher();
    };
    IsTeacherGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], IsTeacherGuard);
    return IsTeacherGuard;
}());
export { IsTeacherGuard };
//# sourceMappingURL=is-teacher.guard.js.map