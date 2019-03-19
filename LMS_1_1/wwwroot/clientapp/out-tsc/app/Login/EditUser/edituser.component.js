import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { takeUntil } from 'rxjs/operators';
var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(db, cd, route, messhandler, router, PartipantService) {
        this.db = db;
        this.cd = cd;
        this.route = route;
        this.messhandler = messhandler;
        this.router = router;
        this.PartipantService = PartipantService;
        this.unsubscribe = new Subject();
        this.isTeacher = false;
    }
    EdituserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.db.isTeacher;
        var id = this.route.snapshot.paramMap.get("id"); // null if no hit?
        this.PartipantService.GetUser(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (u) {
            _this.user = u[0];
            _this.cd.markForCheck();
        });
    };
    EdituserComponent.prototype.onRegister = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (this.user.oldpassword == null)
            this.user.oldpassword = "";
        if (this.isTeacher) {
            this.db.UpdateUserAdmin(this.user)
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
        }
        else {
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
        }
    };
    EdituserComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    EdituserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edituser',
            templateUrl: './edituser.component.html',
            styleUrls: ['./edituser.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ChangeDetectorRef, ActivatedRoute,
            LoginMessageHandlerService,
            Router, PartipantService])
    ], EdituserComponent);
    return EdituserComponent;
}());
export { EdituserComponent };
//# sourceMappingURL=edituser.component.js.map