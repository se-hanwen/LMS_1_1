import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ModuleService } from '../module.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var ModuleDeleteComponent = /** @class */ (function () {
    function ModuleDeleteComponent(route, courseService, moduleService, router, cd) {
        this.route = route;
        this.courseService = courseService;
        this.moduleService = moduleService;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new Subject();
    }
    ModuleDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.courseService.getModulAndActivitybyId(id).pipe(takeUntil(this.unsubscribe))
            .subscribe(function (tmodule) {
            _this.module_delete = tmodule;
            _this.cd.markForCheck();
        }, function (error) { console.log(error); });
    };
    ModuleDeleteComponent.prototype.ConfirmedDelete = function () {
        var _this = this;
        this.moduleService.DeleteModule(this.module_delete.id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (s) {
            _this.cd.markForCheck();
            _this.router.navigate(['/courses']); //Todo
        });
    };
    ModuleDeleteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-module-delete',
            templateUrl: './module-delete.component.html',
            styleUrls: ['./module-delete.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            CourseService,
            ModuleService,
            Router,
            ChangeDetectorRef])
    ], ModuleDeleteComponent);
    return ModuleDeleteComponent;
}());
export { ModuleDeleteComponent };
//# sourceMappingURL=module-delete.component.js.map