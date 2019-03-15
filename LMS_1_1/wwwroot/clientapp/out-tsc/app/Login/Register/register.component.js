import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RegisterUser } from './registeruser';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(db) {
        this.db = db;
        this.user = new RegisterUser();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.errorMessage = "";
        this.db.register(this.user)
            .subscribe(function (success) {
            if (success)
                return true;
        }, function (err) { return _this.errorMessage = "Failed to Create user"; });
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map