import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var AddModuleWithCourseIdComponent = /** @class */ (function () {
    function AddModuleWithCourseIdComponent(route) {
        this.route = route;
        this.CourseId = "";
    }
    AddModuleWithCourseIdComponent.prototype.ngOnInit = function () {
        this.CourseId = this.route.snapshot.paramMap.get('id');
    };
    AddModuleWithCourseIdComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-module-with-course-id',
            templateUrl: './add-module-with-course-id.component.html',
            styleUrls: ['./add-module-with-course-id.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], AddModuleWithCourseIdComponent);
    return AddModuleWithCourseIdComponent;
}());
export { AddModuleWithCourseIdComponent };
//# sourceMappingURL=add-module-with.course-id.component.js.map