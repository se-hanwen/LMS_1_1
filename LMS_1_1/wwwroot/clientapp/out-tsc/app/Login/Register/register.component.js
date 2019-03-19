import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { RegisterUser } from './registeruser';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(db, cd, messhandler, router) {
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
        this.router = router;
        this.unsubscribe = new Subject();
        this.user = new RegisterUser();
        // private theForm: FormGroup;
        this.HasChoosedCourse = false;
        this.returnmessage = null;
        this.saveduser = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.SendUserId("");
        this.messhandler.SendIsteacher(false);
        this.messhandler.HasChoosedCourses
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.HasChoosedCourse = status;
            _this.cd.markForCheck();
        });
        this.messhandler.HasSavedCoures
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            if (status) {
                if (_this.saveduser) {
                    _this.messhandler.SendConfirm(_this.returnmessage);
                    _this.router.navigate(['/Account/ConfirmRegistedUser']);
                }
            }
            _this.cd.markForCheck();
        });
    };
    RegisterComponent.prototype.OnToggleRole = function () {
        if (this.user.role == "Student") {
            this.messhandler.SendIsteacher(false);
        }
        else {
            this.messhandler.SendIsteacher(true);
        }
    };
    RegisterComponent.prototype.onRegister = function (TheForm) {
        var _this = this;
        this.errorMessage = "";
        this.db.register(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (success) {
            _this.saveduser = true;
            TheForm.form.disable();
            _this.cd.markForCheck();
            var msg = "Created " + _this.user.firstName + " " + _this.user.lastName + " with the role " + _this.user.role;
            if (_this.user.role == "Student") {
                // om student medella add
                _this.messhandler.SendUserId(success.value.name);
                _this.returnmessage = msg;
            }
            else {
                _this.messhandler.SendConfirm(msg);
                _this.router.navigate(['/Account/ConfirmRegistedUser']);
            }
            return true;
        }, function (err) { return _this.errorMessage = err; });
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
            LoginMessageHandlerService,
            Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map