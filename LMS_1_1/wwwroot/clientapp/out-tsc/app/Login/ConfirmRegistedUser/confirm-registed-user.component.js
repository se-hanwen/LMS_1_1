import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var ConfirmRegistedUserComponent = /** @class */ (function () {
    function ConfirmRegistedUserComponent(route, cd, messhandler) {
        this.route = route;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new Subject();
        this.message = "";
    }
    ConfirmRegistedUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.ConfirmMessage
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.message = status;
            _this.messhandler.CourseSaved
                .pipe(takeUntil(_this.unsubscribe))
                .subscribe(function (courses) {
                if (courses && courses.length > 0) {
                    _this.message = _this.message + " On " + courses;
                }
            });
            _this.messhandler.SendUserId("");
            _this.cd.markForCheck();
        });
    };
    ConfirmRegistedUserComponent.prototype.ngOnDestroy = function () {
        this.messhandler.SendCourseSaved("");
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmRegistedUserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-confirm-registed-user',
            templateUrl: './confirm-registed-user.component.html',
            styleUrls: ['./confirm-registed-user.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], ConfirmRegistedUserComponent);
    return ConfirmRegistedUserComponent;
}());
export { ConfirmRegistedUserComponent };
//# sourceMappingURL=confirm-registed-user.component.js.map