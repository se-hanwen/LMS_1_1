import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
var detailList = /** @class */ (function () {
    function detailList(route, CourseService, AuthService) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.savesubs = new Array();
    }
    detailList.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        this.CourseService.getCourseAndModulebyId(this.courseid).subscribe(function (course) {
            _this.course = course;
        }, function (error) { return _this.errorMessage = error; });
    };
    detailList.prototype.TogggelCollapse = function (mid) {
        var _this = this;
        if (this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded == " show") {
            this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded = "";
            if (this.savesubs.find(function (t) { return t[0] == mid; })) {
                this.savesubs.find(function (t) { return t[0] == mid; })[1].unsubscribe();
                this.savesubs.splice(this.savesubs.indexOf(this.savesubs.find(function (t) { return t[0] == mid; })), 1);
            }
        }
        else {
            this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded = " show";
            var temp = this.CourseService.getActivitybymodulId(mid).subscribe(function (activities) {
                _this.course.modules.find(function (m) { return m.id.toString() == mid; }).activities = activities;
            }, function (error) { return _this.errorMessage = error; });
            if (this.savesubs.find(function (t) { return t[0] == mid; })) {
                this.savesubs.find(function (t) { return t[0] == mid; })[1] = temp;
            }
            else {
                this.savesubs.push([mid, temp]);
            }
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], detailList.prototype, "courseid", void 0);
    detailList = tslib_1.__decorate([
        Component({
            selector: "detail_list",
            templateUrl: "detail_list.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            CourseService,
            AuthService])
    ], detailList);
    return detailList;
}());
export { detailList };
//# sourceMappingURL=detail_list.component.js.map