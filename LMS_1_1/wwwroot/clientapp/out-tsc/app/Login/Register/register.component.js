import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { RegisterUser } from './registeruser';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(db, cd, messhandler) {
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
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
            _this.messhandler.Send(success.value.name);
            _this.cd.markForCheck();
            return true;
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
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map