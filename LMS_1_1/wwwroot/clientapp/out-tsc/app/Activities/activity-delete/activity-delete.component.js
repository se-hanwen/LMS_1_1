import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ActivitiesService } from '../activities.service';
var ActivityDeleteComponent = /** @class */ (function () {
    function ActivityDeleteComponent(route, actvservice, router, cd) {
        this.route = route;
        this.actvservice = actvservice;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new Subject();
    }
    ActivityDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.actvservice.GetActivity(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (tactv) {
            _this.act_delete = tactv;
            _this.cd.markForCheck();
        }, function (error) { console.log(error); });
    };
    ActivityDeleteComponent.prototype.DelActivity = function () {
        var _this = this;
        this.actvservice.DeleteActivity(this.act_delete.id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (tact) {
            _this.cd.markForCheck();
            _this.router.navigate(['/courses']);
        });
    };
    ActivityDeleteComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ActivityDeleteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-activity-delete',
            templateUrl: './activity-delete.component.html',
            styleUrls: ['./activity-delete.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ActivitiesService,
            Router,
            ChangeDetectorRef])
    ], ActivityDeleteComponent);
    return ActivityDeleteComponent;
}());
export { ActivityDeleteComponent };
//# sourceMappingURL=activity-delete.component.js.map