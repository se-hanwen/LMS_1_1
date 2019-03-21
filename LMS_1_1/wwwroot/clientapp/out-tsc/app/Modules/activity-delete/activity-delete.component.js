import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../module.service';
var ActivityDeleteComponent = /** @class */ (function () {
    function ActivityDeleteComponent(route, moduleService, router, cd) {
        this.route = route;
        this.moduleService = moduleService;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new Subject();
    }
    ActivityDeleteComponent.prototype.ngOnInit = function () {
    };
    ActivityDeleteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-activity-delete',
            templateUrl: './activity-delete.component.html',
            styleUrls: ['./activity-delete.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ModuleService,
            Router,
            ChangeDetectorRef])
    ], ActivityDeleteComponent);
    return ActivityDeleteComponent;
}());
export { ActivityDeleteComponent };
//# sourceMappingURL=activity-delete.component.js.map