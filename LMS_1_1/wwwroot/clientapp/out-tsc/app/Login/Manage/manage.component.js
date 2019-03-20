import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { RegisterUser } from '../Register/registeruser';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { takeUntil } from 'rxjs/operators';
var ManageComponent = /** @class */ (function () {
    function ManageComponent(db, cd, route, messhandler, router, PartipantService) {
        this.db = db;
        this.cd = cd;
        this.route = route;
        this.messhandler = messhandler;
        this.router = router;
        this.PartipantService = PartipantService;
        this.unsubscribe = new Subject();
        this.user = new RegisterUser();
        this.isTeacher = false;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PartipantService.GetUser(null)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (u) {
            _this.user = u[0];
            _this.cd.markForCheck();
        });
    };
    ManageComponent.prototype.onRegister = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (this.user.oldpassword == null)
            this.user.oldpassword = "";
        this.db.UpdateUser(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            if (status) {
                _this.errorMessage = "Update succeded";
            }
            else {
                _this.errorMessage = "Update failed";
            }
            _this.cd.markForCheck();
        });
    };
    ManageComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ManageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-manage',
            templateUrl: './manage.component.html',
            styleUrls: ['./manage.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ChangeDetectorRef, ActivatedRoute,
            LoginMessageHandlerService,
            Router, PartipantService])
    ], ManageComponent);
    return ManageComponent;
}());
export { ManageComponent };
//# sourceMappingURL=manage.component.js.map