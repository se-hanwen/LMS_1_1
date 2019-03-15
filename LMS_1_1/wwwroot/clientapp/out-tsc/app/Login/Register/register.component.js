import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { RegisterUser } from './registeruser';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(db, cd) {
        this.db = db;
        this.cd = cd;
        this.unsubscribe = new Subject();
        this.user = new RegisterUser();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.errorMessage = "";
        this.db.register(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (success) {
            if (success)
                return true;
            _this.cd.markForCheck();
        }, function (err) { return _this.errorMessage = "Failed to Create user"; });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ChangeDetectorRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map