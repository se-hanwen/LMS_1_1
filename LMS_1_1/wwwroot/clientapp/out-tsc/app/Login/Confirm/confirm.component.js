import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { takeUntil } from 'rxjs/operators';
var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(route, cd, messhandler) {
        this.route = route;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new Subject();
        this.message = "";
        this.goonurl = [];
        this.goonmess = "";
        this.gobackurl = [];
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.ConfirmMessage
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (mess) {
            _this.message = mess;
            _this.cd.markForCheck();
        });
        this.messhandler.ConfirmGoOnUrl
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (mess) {
            _this.goonurl = mess;
            _this.cd.markForCheck();
        });
        this.messhandler.ConfirmGoOnMessage
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (mess) {
            _this.goonmess = mess;
            _this.cd.markForCheck();
        });
        this.messhandler.ConfirmGoBackUrl
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (mess) {
            _this.gobackurl = mess;
            _this.cd.markForCheck();
        });
    };
    ConfirmComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmComponent = tslib_1.__decorate([
        Component({
            selector: 'app-confirm',
            templateUrl: './confirm.component.html',
            styleUrls: ['./confirm.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
export { ConfirmComponent };
//# sourceMappingURL=confirm.component.js.map