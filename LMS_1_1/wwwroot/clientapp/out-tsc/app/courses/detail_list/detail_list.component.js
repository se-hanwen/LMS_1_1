import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course-list/course.service';
var detailList = /** @class */ (function () {
    function detailList(route, CourseService) {
        this.route = route;
        this.CourseService = CourseService;
        this.courseid = "";
        this.coulist = [
            {
                Name: "C# Basic",
                StartDate: "2019.01.02 10:00",
                Description: "A basic course of C#",
                Modules: [
                    {
                        Name: "C# module 1",
                        StartDate: "2019.01.02 10:00",
                        Description: "Module 1 of C#"
                    },
                    {
                        Name: "C# module 2",
                        StartDate: "2019.01.02 10:00",
                        Description: "Module 2 of C#"
                    }
                ]
            },
            {
                Name: "C# Advanced",
                StartDate: "2019.01.03 10:00",
                Description: "A follow on course of C#",
                Modules: [
                    {
                        Name: "C# module 3",
                        StartDate: "2019.01.03 10:00",
                        Description: "Module 3 of C#"
                    },
                    {
                        Name: "C# module 4",
                        StartDate: "2019.01.03 10:00",
                        Description: "Module 4 of C#"
                    }
                ]
            }
        ];
    }
    detailList.prototype.ngOnInit = function () {
        var _this = this;
        this.CourseService.getCourseAllById(this.courseid).subscribe(function (course) {
            _this.course = course;
        }, function (error) { return _this.errorMessage = error; });
    };
    detailList.prototype.TogggelCollapse = function (mid) {
        if (this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded == " show") {
            this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded = "";
        }
        else {
            this.course.modules.find(function (m) { return m.id.toString() == mid; }).isExpanded = " show";
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
            CourseService])
    ], detailList);
    return detailList;
}());
export { detailList };
//# sourceMappingURL=detail_list.component.js.map