import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { Router } from '@angular/router';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { takeUntil } from 'rxjs/operators';
var ManageusersComponent = /** @class */ (function () {
    function ManageusersComponent(PartipantService, route, cd, messhandler) {
        this.PartipantService = PartipantService;
        this.route = route;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new Subject();
        this.togglechoose = false;
        this.lastuserid = "";
        this.users = [];
    }
    ManageusersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.SendIsteacher(true);
        this.PartipantService.GetUsers()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.users = status;
            _this.cd.markForCheck();
        });
    };
    ManageusersComponent.prototype.ChooseUser = function (id) {
        if (this.users.find(function (u) { return u.id == id; }).role != "Teacher") {
            if (this.togglechoose && this.lastuserid == id) {
                this.togglechoose = false;
                this.messhandler.SendIsteacher(true);
            }
            else {
                this.togglechoose = true;
                this.lastuserid = id;
                this.messhandler.SendIsteacher(false);
                this.messhandler.SendUserId(id);
            }
        }
        else {
            this.togglechoose = false;
            this.messhandler.SendIsteacher(true);
        }
    };
    ManageusersComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ManageusersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-manageusers',
            templateUrl: './manageusers.component.html',
            styleUrls: ['./manageusers.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PartipantService, Router,
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], ManageusersComponent);
    return ManageusersComponent;
}());
export { ManageusersComponent };
//# sourceMappingURL=manageusers.component.js.map