import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var ModulDetailsComponent = /** @class */ (function () {
    function ModulDetailsComponent(route, CourseService, AuthService) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
    }
    ModulDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        var Modulid = this.route.snapshot.paramMap.get('id');
        this.CourseService.getModulAndActivitybyId(Modulid).subscribe(function (modul) {
            _this.module = modul;
        }, function (error) { return _this.errorMessage = error; });
    };
    ModulDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CourseService, AuthService])
    ], ModulDetailsComponent);
    return ModulDetailsComponent;
}());
export { ModulDetailsComponent };
//# sourceMappingURL=details.component.js.map