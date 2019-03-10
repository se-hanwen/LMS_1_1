import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartipantService } from './partipant.service';
import { throwError } from 'rxjs';
var AddPartipantComponent = /** @class */ (function () {
    function AddPartipantComponent(route, router, PartipantService) {
        this.route = route;
        this.router = router;
        this.PartipantService = PartipantService;
        this.pageTitle = "";
        this.BlackList = [];
        this.ChooseFrom = [];
        this.Choosed = [];
        this.courseId = "";
        this._listFilter = '';
    }
    Object.defineProperty(AddPartipantComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.performFilter(this.listFilter);
        },
        enumerable: true,
        configurable: true
    });
    AddPartipantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseId = this.route.snapshot.paramMap.get('id');
        this.PartipantService.CourseId = this.courseId;
        this.PartipantService.GetStudentsOff().subscribe(function (Choose) { return _this.ChooseFrom = Choose; });
        this.PartipantService.GetStudentsOn().subscribe(function (Choosed) {
            _this.Choosed = Choosed;
            _this.PartipantService.Choosed = _this.Choosed;
        });
        this.PartipantService.GetCourseName().subscribe(function (CourseName) { return _this.pageTitle = CourseName.value.name; });
    };
    AddPartipantComponent.prototype.chooseStudent = function (userid) {
        var keyin = this.ChooseFrom.findIndex(function (cu) { return cu.userid == userid; });
        if (keyin == -1)
            throwError;
        var user = this.ChooseFrom.splice(+keyin, 1);
        this.Choosed.push(user[0]);
        this.PartipantService.AddStudent(user[0]);
        if (this.Choosed.length > 1) {
            this.Choosed.sort(function (a, b) {
                var FirstNameA = a.firstName.toLocaleUpperCase();
                var LastNameA = a.lastName.toLocaleUpperCase();
                var FirstNameB = b.firstName.toLocaleUpperCase();
                var LastNameB = b.lastName.toLocaleUpperCase();
                if (FirstNameA < FirstNameB)
                    return -1;
                if (FirstNameA > FirstNameB)
                    return 1;
                if (LastNameA < LastNameB)
                    return -1;
                if (LastNameA > LastNameB)
                    return 1;
                return 0;
            });
        }
    };
    AddPartipantComponent.prototype.unChooseStudent = function (userid) {
        var keyin = this.Choosed.findIndex(function (cu) { return cu.userid == userid; });
        if (keyin == -1)
            throwError;
        var user = this.Choosed.splice(+keyin, 1);
        this.ChooseFrom.push(user[0]);
        this.PartipantService.RemoveStudent(user[0]);
        if (this.ChooseFrom.length > 1) {
            this.ChooseFrom.sort(function (a, b) {
                var FirstNameA = a.firstName.toLocaleUpperCase();
                var LastNameA = a.lastName.toLocaleUpperCase();
                var FirstNameB = b.firstName.toLocaleUpperCase();
                var LastNameB = b.lastName.toLocaleUpperCase();
                if (FirstNameA < FirstNameB)
                    return -1;
                if (FirstNameA > FirstNameB)
                    return 1;
                if (LastNameA < LastNameB)
                    return -1;
                if (LastNameA > LastNameB)
                    return 1;
                return 0;
            });
        }
    };
    AddPartipantComponent.prototype.SaveStudents = function () {
        this.PartipantService.SaveStudents().subscribe();
    };
    AddPartipantComponent.prototype.performFilter = function (FilterBy) {
        for (var key in this.BlackList) { // nwe filter => reset before applying filter
            var temp = this.BlackList.pop();
            this.ChooseFrom.push(temp);
        }
        if (FilterBy != "") {
            for (var key in this.ChooseFrom) {
                if (this.ChooseFrom[key].firstName.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase()) == -1 &&
                    this.ChooseFrom[key].lastName.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase()) == -1) {
                    var user = this.ChooseFrom.splice(+key, 1);
                    this.BlackList.push(user[0]); // I Know there is just one hit cause key is scalar
                }
            }
            if (this.ChooseFrom.length > 1) {
                this.ChooseFrom.sort(function (a, b) {
                    var FirstNameA = a.firstName.toLocaleUpperCase();
                    var LastNameA = a.lastName.toLocaleUpperCase();
                    var FirstNameB = b.firstName.toLocaleUpperCase();
                    var LastNameB = b.lastName.toLocaleUpperCase();
                    if (FirstNameA < FirstNameB)
                        return -1;
                    if (FirstNameA > FirstNameB)
                        return 1;
                    if (LastNameA < LastNameB)
                        return -1;
                    if (LastNameA > LastNameB)
                        return 1;
                    return 0;
                });
            }
        }
    };
    AddPartipantComponent = tslib_1.__decorate([
        Component({
            selector: 'add-partipant',
            templateUrl: './add-partipant.component.html',
            styleUrls: ['./add-partipant.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            PartipantService])
    ], AddPartipantComponent);
    return AddPartipantComponent;
}());
export { AddPartipantComponent };
//# sourceMappingURL=add-partipant.component.js.map