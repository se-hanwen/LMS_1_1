import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { Router } from '@angular/router';
import { throwError, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';
var AddStudentToCourseComponent = /** @class */ (function () {
    function AddStudentToCourseComponent(PartipantService, route, cd, messhandler) {
        this.PartipantService = PartipantService;
        this.route = route;
        this.cd = cd;
        this.messhandler = messhandler;
        this.test = "";
        this.unsubscribe = new Subject();
        this.pageTitle = "";
        this.BlackList = [];
        this._ChooseFrom = [];
        this.Saveoff = null;
        this.SaveOn = null;
        this.Saveusername = null;
        this.isTeacher = false;
        this.CoursesChoosed = false;
        this._Choosed = [];
        this.userid = null;
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
        // this.userid= this.route.snapshot.paramMap.get('id');
        // getfrom save on regsiteruser
        var _this = this;
        this.messhandler.Isteacher
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (status) {
            _this.isTeacher = status;
            _this.cd.markForCheck();
        });
        this.messhandler.userid
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (resp) {
            if (resp != null && resp != "") {
                _this.userid = resp;
                if (!_this.isTeacher && _this.CoursesChoosed) {
                    _this.SaveCourses();
                }
                else {
                    if (_this.Saveoff != null) {
                        _this.Saveoff.unsubscribe;
                    }
                    _this.Saveoff = _this.PartipantService.GetCoursesOff(_this.userid)
                        .pipe(takeUntil(_this.unsubscribe))
                        .subscribe(function (Choose) {
                        _this.ChooseFrom = Choose;
                        _this.cd.markForCheck();
                    });
                    if (_this.SaveOn != null) {
                        _this.SaveOn.unsubscribe;
                    }
                    _this.SaveOn = _this.PartipantService.GetCoursesOn(_this.userid)
                        .pipe(takeUntil(_this.unsubscribe))
                        .subscribe(function (Choosed) {
                        _this.Choosed = Choosed;
                        _this.cd.markForCheck();
                    });
                    if (_this.Saveusername != null) {
                        _this.Saveusername.unsubscribe();
                    }
                    _this.Saveusername = _this.PartipantService.GetUserName(_this.userid)
                        .pipe(takeUntil(_this.unsubscribe))
                        .subscribe(function (UserName) {
                        if (UserName != null) {
                            _this.pageTitle = UserName.value.name;
                        }
                        _this.cd.markForCheck();
                    });
                    _this.cd.markForCheck();
                }
            }
        });
        this.Saveoff = this.PartipantService.GetCoursesOff(this.userid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (Choose) {
            _this.ChooseFrom = Choose;
            _this.cd.markForCheck();
        });
        this.SaveOn = this.PartipantService.GetCoursesOn(this.userid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (Choosed) {
            _this.Choosed = Choosed;
            _this.cd.markForCheck();
        });
    };
    AddStudentToCourseComponent.prototype.chooseCourse = function (corseid) {
        if (!this.CoursesChoosed) {
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
        }
    };
    AddStudentToCourseComponent.prototype.unChooseCourse = function (corseid) {
        if (!this.CoursesChoosed) {
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
        }
    };
    AddStudentToCourseComponent.prototype.SaveCourses = function () {
        var _this = this;
        this.PartipantService.SaveCourses(this.userid, this._Choosed)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (success) {
            var savedcourses = "";
            var workstart = false;
            for (var _i = 0, _a = _this._Choosed; _i < _a.length; _i++) {
                var work = _a[_i];
                savedcourses = savedcourses + (workstart ? ", " : "") + work.name;
                workstart = true;
            }
            _this.messhandler.SendHasSavedCoures(true);
            _this.messhandler.SendCourseSaved(savedcourses);
            _this.cd.markForCheck();
        });
    };
    AddStudentToCourseComponent.prototype.ChooseCourses = function () {
        this.CoursesChoosed = !this.CoursesChoosed;
        this.messhandler.SendHasChoosedCourses(this.CoursesChoosed);
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
    AddStudentToCourseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AddStudentToCourseComponent = tslib_1.__decorate([
        Component({
            selector: 'add_student_to_course',
            templateUrl: './add_student_to_course.component.html',
            styleUrls: ['./add_student_to_course.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PartipantService, Router,
            ChangeDetectorRef,
            LoginMessageHandlerService])
    ], AddStudentToCourseComponent);
    return AddStudentToCourseComponent;
}());
export { AddStudentToCourseComponent };
//# sourceMappingURL=add_student_to_course.component.js.map