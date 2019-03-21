import * as tslib_1 from "tslib";
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'ClientApp/app/data.service';
var ActitityListComponent = /** @class */ (function () {
    function ActitityListComponent(route, CourseService, AuthService, cd, data) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.data = data;
        this.unsubscribe = new Subject();
        this.isTeacher = false;
    }
    ActitityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        //this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);
        //getModulAndActivitybyId(Moduleid: string) : Observable<IModule>
        this.CourseService.getModulAndActivitybyId(this.moduleid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (module) {
            _this.module = module;
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    ActitityListComponent.prototype.TogggelCollapse = function (aid) {
        if (this.module.activities.find(function (a) { return a.id.toString() == aid; }).isExpanded == " show") {
            this.module.activities.find(function (a) { return a.id.toString() == aid; }).isExpanded = "";
            this.data.getData(aid);
        }
        else {
            this.module.activities.find(function (a) { return a.id.toString() == aid; }).isExpanded = " show";
        }
    };
    ActitityListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ActitityListComponent.prototype, "moduleid", void 0);
    ActitityListComponent = tslib_1.__decorate([
        Component({
            selector: "activity_list",
            templateUrl: "actitity_list.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            CourseService,
            AuthService,
            ChangeDetectorRef,
            DataService])
    ], ActitityListComponent);
    return ActitityListComponent;
}());
export { ActitityListComponent };
//# sourceMappingURL=actitity_list.component.js.map