import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
var AddStudentToCourseComponent = /** @class */ (function () {
    function AddStudentToCourseComponent(PartipantService, route) {
        this.PartipantService = PartipantService;
        this.route = route;
        this.test = "";
        this.pageTitle = "";
        this.BlackList = [];
        this._ChooseFrom = [];
        this._Choosed = [];
        this._listFilter = '';
    }
    Object.defineProperty(AddStudentToCourseComponent.prototype, "ChooseFrom", {
        get: function () {
            return this._ChooseFrom;
        },
        set: function (value) {
            this._ChooseFrom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddStudentToCourseComponent.prototype, "Choosed", {
        get: function () {
            return this._Choosed;
        },
        set: function (value) {
            this._Choosed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddStudentToCourseComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            // this.performFilter(this.listFilter)
        },
        enumerable: true,
        configurable: true
    });
    AddStudentToCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.userid= this.route.snapshot.paramMap.get('id');
        // getfrom save on regsiteruser
        this.PartipantService.GetCoursesOff(this.userid).subscribe(function (Choose) { return _this.ChooseFrom = Choose; });
        this.PartipantService.GetCoursesOn(this.userid).subscribe(function (Choosed) {
            return _this.Choosed = Choosed;
        });
        this.PartipantService.GetUserName(this.userid).subscribe(function (UserName) { return _this.pageTitle = UserName.value.name; });
    };
    AddStudentToCourseComponent.prototype.chooseCourse = function (corseid) {
        var keyin = this.ChooseFrom.findIndex(function (cu) { return cu.id.toString() == corseid; });
        if (keyin == -1)
            throwError;
        var course = this.ChooseFrom.splice(+keyin, 1);
        this.Choosed.push(course[0]);
        if (this.Choosed.length > 1) {
            this.Choosed.sort(function (a, b) {
                var FirstNameA = a.name.toLocaleUpperCase();
                var FirstNameB = b.name.toLocaleUpperCase();
                if (FirstNameA < FirstNameB)
                    return -1;
                if (FirstNameA > FirstNameB)
                    return 1;
                return 0;
            });
        }
    };
    AddStudentToCourseComponent.prototype.uunChooseCourse = function (corseid) {
        var keyin = this.Choosed.findIndex(function (cu) { return cu.id.toString() == corseid; });
        if (keyin == -1)
            throwError;
        var course = this.Choosed.splice(+keyin, 1);
        this.ChooseFrom.push(course[0]);
        if (this.ChooseFrom.length > 1) {
            this.Choosed.sort(function (a, b) {
                var FirstNameA = a.name.toLocaleUpperCase();
                var FirstNameB = b.name.toLocaleUpperCase();
                if (FirstNameA < FirstNameB)
                    return -1;
                if (FirstNameA > FirstNameB)
                    return 1;
                return 0;
            });
        }
    };
    AddStudentToCourseComponent.prototype.SaveCourses = function () {
        this.PartipantService.SaveCourses(this.userid, this._Choosed).subscribe();
        //this.router.navigate(['/courses', this.courseid]);
    };
    AddStudentToCourseComponent.prototype.performFilter = function (FilterBy) {
        var l1 = this.BlackList.length, i1;
        for (i1 = 0; i1 < l1; i1++) { // new filter => reset before applying filter
            var temp = this.BlackList.pop();
            this.ChooseFrom.push(temp);
        }
        if (FilterBy != "") {
            var l2 = this.ChooseFrom.length, i2 = void 0;
            for (i2 = 0; i2 < l2; i2++) {
                if (this.ChooseFrom[i2].name.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase()) == -1) {
                    var user = this.ChooseFrom.splice(+i2, 1);
                    this.BlackList.push(user[0]); // I Know there is just one hit cause key is scalar
                    i2--; // since one is gone...
                    l2--; // since one is gone...
                }
            }
            if (this.ChooseFrom.length > 1) {
                this.Choosed.sort(function (a, b) {
                    var FirstNameA = a.name.toLocaleUpperCase();
                    var FirstNameB = b.name.toLocaleUpperCase();
                    if (FirstNameA < FirstNameB)
                        return -1;
                    if (FirstNameA > FirstNameB)
                        return 1;
                    return 0;
                });
            }
        }
    };
    AddStudentToCourseComponent = tslib_1.__decorate([
        Component({
            selector: 'add_student_to_course',
            templateUrl: './add_student_to_course.component.html',
            styleUrls: ['./add_student_to_course.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PartipantService, Router])
    ], AddStudentToCourseComponent);
    return AddStudentToCourseComponent;
}());
export { AddStudentToCourseComponent };
//# sourceMappingURL=add_student_to_course.component.js.map