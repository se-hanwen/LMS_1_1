import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginMessageHandlerService } from '../Login/login-message-handler.service';
import { ModuleService } from './module.service';
import { takeUntil } from 'rxjs/operators';
var CheckIfDubbsComponent = /** @class */ (function () {
    function CheckIfDubbsComponent(messhandler, ModuleService, cd) {
        this.messhandler = messhandler;
        this.ModuleService = ModuleService;
        this.cd = cd;
        this.unsubscribe = new Subject();
        this.dubbtype = "";
        this.dubbid = "";
        this.dubbstart = null;
        this.dubbend = null;
        this.Warning = "";
    }
    CheckIfDubbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.DubbType
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.dubbtype = status;
            _this.testandrun();
            _this.cd.markForCheck();
        });
        this.messhandler.DubbId
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.dubbid = status;
            _this.testandrun();
            _this.cd.markForCheck();
        });
        this.messhandler.DubbStart
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.dubbstart = status;
            _this.testandrun();
            _this.cd.markForCheck();
        });
        this.messhandler.DubbEnd
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.dubbend = status;
            _this.testandrun();
            _this.cd.markForCheck();
        });
    };
    CheckIfDubbsComponent.prototype.testandrun = function () {
        var _this = this;
        if (this.dubbtype != "" && this.dubbid != "" && this.dubbstart != null && this.dubbend != null) {
            this.ModuleService.CheckIfDubblett(this.dubbtype, this.dubbid, this.dubbstart, this.dubbend)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.Warning = "There exists " + _this.dubbtype + " in the selected range";
                }
                else {
                    _this.Warning = "";
                }
                _this.cd.markForCheck();
            });
        }
    };
    CheckIfDubbsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CheckIfDubbsComponent = tslib_1.__decorate([
        Component({
            selector: 'check-if-dubbs',
            templateUrl: './check-if-dubbs.component.html',
            styleUrls: ['./check-if-dubbs.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginMessageHandlerService,
            ModuleService,
            ChangeDetectorRef])
    ], CheckIfDubbsComponent);
    return CheckIfDubbsComponent;
}());
export { CheckIfDubbsComponent };
//# sourceMappingURL=check-if-dubbs.component.js.map