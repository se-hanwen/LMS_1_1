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
        this.test = "";
        this.pageTitle = "";
        this.BlackList = [];
        this._ChooseFrom = [];
        this._Choosed = [];
        this._listFilter = '';
    }
    Object.defineProperty(AddPartipantComponent.prototype, "ChooseFrom", {
        get: function () {
            return this._ChooseFrom;
        },
        set: function (value) {
            this._ChooseFrom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddPartipantComponent.prototype, "Choosed", {
        get: function () {
            return this._Choosed;
        },
        set: function (value) {
            this._Choosed = value;
        },
        enumerable: true,
        configurable: true
    });
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
        this.courseid = this.route.snapshot.paramMap.get('id');
        this.PartipantService.CourseId = this.courseid;
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
        //this.router.navigate(['/courses', this.courseid]);
    };
    AddPartipantComponent.prototype.performFilter = function (FilterBy) {
        var l1 = this.BlackList.length, i1;
        for (i1 = 0; i1 < l1; i1++) { // new filter => reset before applying filter
            var temp = this.BlackList.pop();
            this.ChooseFrom.push(temp);
        }
        if (FilterBy != "") {
            var l2 = this.ChooseFrom.length, i2 = void 0;
            for (i2 = 0; i2 < l2; i2++) {
                if (this.ChooseFrom[i2].firstName.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase()) == -1 &&
                    this.ChooseFrom[i2].lastName.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase()) == -1) {
                    var user = this.ChooseFrom.splice(+i2, 1);
                    this.BlackList.push(user[0]); // I Know there is just one hit cause key is scalar
                    i2--; // since one is gone...
                    l2--; // since one is gone...
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
    AddPartipantComponent.prototype.FixHeader = function (From_id, To_id, Body_from_id) {
        var element = document.querySelector("#" + From_id).cloneNode(true);
        var temp = [], i1, i2, el, l1;
        var childs = document.querySelector("#" + From_id).children;
        l1 = childs.length;
        for (i1 = 0; i1 < l1; i1++) {
            temp[i1] = childs.item(i1).clientWidth;
        }
        ;
        if (element.hasChildNodes) {
            var elchild = element.firstChild;
            elchild.style.width == temp[0];
            var elchild2 = elchild.nextSibling;
            for (i1 = 1; i1 < l1; i1++) {
                elchild2.style.width = temp[i1];
                //elchild2.childNodes.item[0].clientWidth=temp[i1];
                elchild2 = elchild2.nextSibling;
            }
        }
        var tableBody_from_id = document.querySelector("table#" + Body_from_id);
        if (tableBody_from_id != null) {
            tableBody_from_id.style.tableLayout = "fixed";
        }
        //  ( document.querySelector("table#"+Body_from_id) as HTMLElement).style.tableLayout="fixed";
        var bodytrs = document.querySelectorAll("#" + Body_from_id + " tr");
        bodytrs.forEach(function (el2, i2) {
            (document.querySelectorAll("#" + el2.id + " td")).forEach(function (el1, i1) {
                el1.style.width = temp[i1];
            }, el2);
        }, bodytrs);
        var to_id_elem = document.querySelector("#" + To_id);
        if (to_id_elem.hasChildNodes) {
            document.querySelector("#" + To_id).childNodes.forEach(function (el2, i2) {
                el2.remove();
            });
        }
        ;
        document.querySelector("#" + To_id).append(element);
        document.querySelector("#" + From_id).style.display = "none";
        element.style.display = "Block";
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