import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartipantService } from '../AddPartipant/partipant.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var PartipantListComponent = /** @class */ (function () {
    function PartipantListComponent(route, PartipantService, cd) {
        this.route = route;
        this.PartipantService = PartipantService;
        this.cd = cd;
        this.unsubscribe = new Subject();
        this.courseid = "";
    }
    PartipantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PartipantService.ShowPartipantList
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.show = status;
            _this.cd.markForCheck();
        });
        this.PartipantService.CourseId = this.courseid;
        this.PartipantService.GetStudentsOn()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (user) {
            _this.users = user;
            _this.cd.markForCheck();
        });
    };
    PartipantListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PartipantListComponent.prototype, "courseid", void 0);
    PartipantListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-partipant-list',
            templateUrl: './partipant-list.component.html',
            styleUrls: ['./partipant-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, PartipantService,
            ChangeDetectorRef])
    ], PartipantListComponent);
    return PartipantListComponent;
}());
export { PartipantListComponent };
//# sourceMappingURL=partipant-list.component.js.map