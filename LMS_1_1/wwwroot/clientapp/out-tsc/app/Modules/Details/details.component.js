import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
var ModulDetailsComponent = /** @class */ (function () {
    function ModulDetailsComponent(route, CourseService, AuthService, cd, messhandler) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new Subject();
    }
    ModulDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        /* this.AuthService.isTeacher
         .pipe(takeUntil(this.unsubscribe))
         .subscribe( i => this.isTeacher=i);
         */
        var Modulid = this.route.snapshot.paramMap.get('id');
        this.CourseService.getModulAndActivitybyId(Modulid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (modul) {
            _this.module = modul;
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    ModulDetailsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ModulDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService, AuthService,
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], ModulDetailsComponent);
    return ModulDetailsComponent;
}());
export { ModulDetailsComponent };
//# sourceMappingURL=details.component.js.map