import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var DeleteuserComponent = /** @class */ (function () {
    function DeleteuserComponent(route, router, db, PartipantService, cd, messagehandler) {
        this.route = route;
        this.router = router;
        this.db = db;
        this.PartipantService = PartipantService;
        this.cd = cd;
        this.messagehandler = messagehandler;
        this.unsubscribe = new Subject();
        this.errtext = "";
    }
    DeleteuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.PartipantService.GetUser(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (u) {
            _this.user = u[0];
            _this.cd.markForCheck();
        });
    };
    DeleteuserComponent.prototype.ConfirmedDelete = function () {
        var _this = this;
        this.db.DeleteUser(this.user.id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            if (status)
                _this.errtext = "User Deleted";
            _this.cd.markForCheck();
            _this.messagehandler.SendConfirm("User " + _this.user.firstName + ' ' + _this.user.lastName + " Deleted");
            _this.messagehandler.SendConfirmGoOnUrl(["/Account/Delete"]);
            _this.messagehandler.SendConfirmGoOnMessage("Delete another user?");
            _this.messagehandler.SendConfirmGoBackUrl(["/Account/ManageUsers"]);
            _this.router.navigate(['Account/Confirm']);
        });
    };
    DeleteuserComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DeleteuserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-deleteuser',
            templateUrl: './deleteuser.component.html',
            styleUrls: ['./deleteuser.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, AuthService, PartipantService,
            ChangeDetectorRef, LoginMessageHandlerService])
    ], DeleteuserComponent);
    return DeleteuserComponent;
}());
export { DeleteuserComponent };
//# sourceMappingURL=deleteuser.component.js.map