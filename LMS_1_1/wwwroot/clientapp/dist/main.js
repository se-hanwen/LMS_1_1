(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/AddPartipant/add-partipant.component.css":
/*!******************************************************!*\
  !*** ./app/AddPartipant/add-partipant.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0FkZFBhcnRpcGFudC9hZGQtcGFydGlwYW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/AddPartipant/add-partipant.component.html":
/*!*******************************************************!*\
  !*** ./app/AddPartipant/add-partipant.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  >\r\n  <div style=\"text-align:center\"  >\r\n       <span *ngIf=\"pageTitle\">Add/Remove students for {{pageTitle}}</span>\r\n  </div>\r\n  <div  class=\"container\">\r\n      <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        \r\n          <div>Filtera</div>\r\n        <div >\r\n            <input type='text'  [(ngModel)]='listFilter'/>\r\n        </div>\r\n        </div>\r\n          <div class=\"col-sm-6\">\r\n            &nbsp;\r\n          </div>\r\n        </div>\r\n    <div class=\"row\">\r\n        \r\n            <div class=\"col-sm-6\">\r\n  \r\n          <div class=\"table-responsive tableContainer\">\r\n            <label>Choose among these</label>\r\n\r\n\r\n\r\n            <table class=\"table scrollTable table-hover\"  cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"  >\r\n\r\n                <thead class=\"fixedHeader\">\r\n                  <tr id=\"from_ChooseFrom\">\r\n                    <th width=\"50%\">First Name</th>\r\n                    <th width=\"50%\">Last Name</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"Bodyn_ChooseFrom\" class=\"scrollContent\" >\r\n                      <tr *ngFor='let Choose of ChooseFrom'>\r\n                          <td width=\"49%\" name=\"Add\" (click)=\"chooseStudent(Choose.userid)\">{{Choose.firstName}}</td>\r\n                          <td width=\"49%\" name=\"Add\" (click)=\"chooseStudent(Choose.userid)\">{{Choose.lastName}}</td>\r\n                      </tr>\r\n\r\n                  </tbody>\r\n\r\n            </table>\r\n      \r\n          </div>\r\n        \r\n      </div>\r\n\r\n   \r\n<div class=\"col-sm-6\">\r\n  \r\n    <div class=\"table-responsive tableContainer\">\r\n        <label>Click here to unchoose</label>\r\n          <table class=\"table scrollTable table-hover\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"  >\r\n              <thead class=\"fixedHeader\">\r\n                <tr id=\"from_Choosed\">\r\n                  <th width=\"50%\">First Name</th>\r\n                  <th width=\"50%\">Last Name</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"Bodyn_Choosed\" class=\"scrollContent\">\r\n                    <tr *ngFor='let UnChoose of Choosed'>\r\n                        <td width=\"49%\" name=\"Remove\" (click)=\"unChooseStudent(UnChoose.userid)\">{{UnChoose.firstName}}</td>\r\n                        <td width=\"49%\" name=\"Remove\" (click)=\"unChooseStudent(UnChoose.userid)\">{{UnChoose.lastName}}</td>\r\n                    </tr>\r\n\r\n              </tbody>\r\n          </table>\r\n          <button  class=\"btn btn-success\" (click)=\"SaveStudents()\">Save</button>\r\n    </div>   \r\n    \r\n     \r\n    </div>\r\n    \r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./app/AddPartipant/add-partipant.component.ts":
/*!*****************************************************!*\
  !*** ./app/AddPartipant/add-partipant.component.ts ***!
  \*****************************************************/
/*! exports provided: AddPartipantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPartipantComponent", function() { return AddPartipantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partipant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partipant.service */ "./app/AddPartipant/partipant.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");





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
            rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"];
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
            rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"];
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
    AddPartipantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-partipant',
            template: __webpack_require__(/*! ./add-partipant.component.html */ "./app/AddPartipant/add-partipant.component.html"),
            styles: [__webpack_require__(/*! ./add-partipant.component.css */ "./app/AddPartipant/add-partipant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _partipant_service__WEBPACK_IMPORTED_MODULE_3__["PartipantService"]])
    ], AddPartipantComponent);
    return AddPartipantComponent;
}());



/***/ }),

/***/ "./app/AddPartipant/add-partipant.module.ts":
/*!**************************************************!*\
  !*** ./app/AddPartipant/add-partipant.module.ts ***!
  \**************************************************/
/*! exports provided: AddPartipantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPartipantModule", function() { return AddPartipantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_partipant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-partipant.component */ "./app/AddPartipant/add-partipant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/is-teacher.guard */ "./app/Shared/is-teacher.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");







var AddPartipantModule = /** @class */ (function () {
    function AddPartipantModule() {
    }
    AddPartipantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_partipant_component__WEBPACK_IMPORTED_MODULE_3__["AddPartipantComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: 'AddPartipant/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_5__["IsTeacherGuard"]],
                        component: _add_partipant_component__WEBPACK_IMPORTED_MODULE_3__["AddPartipantComponent"] }
                ])
            ],
            exports: [
                _add_partipant_component__WEBPACK_IMPORTED_MODULE_3__["AddPartipantComponent"]
            ]
        })
    ], AddPartipantModule);
    return AddPartipantModule;
}());



/***/ }),

/***/ "./app/AddPartipant/partipant.service.ts":
/*!***********************************************!*\
  !*** ./app/AddPartipant/partipant.service.ts ***!
  \***********************************************/
/*! exports provided: PartipantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartipantService", function() { return PartipantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");






var PartipantService = /** @class */ (function () {
    function PartipantService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.Choosed = [];
        this.CourseId = "";
        this.token = "";
        this.AuthService.token.subscribe(function (i) { return _this.token = i; });
    }
    PartipantService.prototype.GetStudentsOff = function () {
        var url = "https://localhost:44396/CourseUsers/GetusersOff";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.GetCourseName = function () {
        var url = "https://localhost:44396/CourseUsers/GetCourseName";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.GetStudentsOn = function () {
        var url = "https://localhost:44396/CourseUsers/GetusersOn";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
        /* map(
         (response:IPartipant[])=>
     {this.Choosed=response;
     }
     ),*/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.SaveStudents = function () {
        var url = "https://localhost:44396/CourseUsers/AddStudentsToCourse";
        var Userids = [];
        for (var _i = 0, _a = this.Choosed; _i < _a.length; _i++) {
            var part = _a[_i];
            Userids.push(part.userid);
        }
        //let parmas={"CourseId":this.CourseId,Userids};    
        return this.http.post(url, { "CourseId": this.CourseId, Userids: Userids }, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.AddStudent = function (user) {
        var item = this.Choosed.find(function (i) { return i.userid == user.userid; });
        if (!item) {
            this.Choosed.push(user);
        }
    };
    PartipantService.prototype.RemoveStudent = function (user) {
        var item = this.Choosed.find(function (i) { return i.userid == user.userid; });
        var index = this.Choosed.indexOf(item);
        if (item) {
            this.Choosed.splice(index, 1);
        }
    };
    PartipantService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    PartipantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], PartipantService);
    return PartipantService;
}());



/***/ }),

/***/ "./app/Courses/course-delete/course-delete.component.css":
/*!***************************************************************!*\
  !*** ./app/Courses/course-delete/course-delete.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0NvdXJzZXMvY291cnNlLWRlbGV0ZS9jb3Vyc2UtZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Courses/course-delete/course-delete.component.html":
/*!****************************************************************!*\
  !*** ./app/Courses/course-delete/course-delete.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Delete</h1>\r\n\r\n<h3>Are you sure you want to delete this?</h3>\r\n<div>\r\n    <h4>Course</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class=\"col-sm-2\">\r\n            Course\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{course.name}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            Start Date\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{course.startDate |date: 'yyyy-MM-dd'}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            Description\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{course.description}}\r\n        </dd>\r\n    </dl>\r\n\r\n    <form #mycourse=\"ngForm\" (ngSubmit)=\"ConfirmedDelete()\">\r\n        <input type=\"hidden\" />\r\n        <input type=\"submit\" value=\"Delete\" class=\"btn btn-danger\" /> |\r\n        <a [routerLink]=\"['/courses']\" >Back to List</a>\r\n    </form>\r\n</div>\r\n<h4>NOTICE! All documents and activities connected to this course will be deleted.</h4>"

/***/ }),

/***/ "./app/Courses/course-delete/course-delete.component.ts":
/*!**************************************************************!*\
  !*** ./app/Courses/course-delete/course-delete.component.ts ***!
  \**************************************************************/
/*! exports provided: CourseDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDeleteComponent", function() { return CourseDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course.service */ "./app/Courses/course.service.ts");




var CourseDeleteComponent = /** @class */ (function () {
    function CourseDeleteComponent(route, CourseService, router) {
        this.route = route;
        this.CourseService = CourseService;
        this.router = router;
    }
    CourseDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id).subscribe(function (tcourse) { _this.course = tcourse; }, function (error) { _this.errorMsg = error; });
    };
    CourseDeleteComponent.prototype.ConfirmedDelete = function () {
        this.CourseService.DeleteCourse(this.course.id).subscribe();
        this.router.navigate(['/courses']);
    };
    CourseDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-delete',
            template: __webpack_require__(/*! ./course-delete.component.html */ "./app/Courses/course-delete/course-delete.component.html"),
            styles: [__webpack_require__(/*! ./course-delete.component.css */ "./app/Courses/course-delete/course-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CourseDeleteComponent);
    return CourseDeleteComponent;
}());



/***/ }),

/***/ "./app/Courses/course-detail/course-detail.component.css":
/*!***************************************************************!*\
  !*** ./app/Courses/course-detail/course-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0NvdXJzZXMvY291cnNlLWRldGFpbC9jb3Vyc2UtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Courses/course-detail/course-detail.component.html":
/*!****************************************************************!*\
  !*** ./app/Courses/course-detail/course-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"course\">\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card\" style=\"width: 19rem;\">\r\n            <img class=\"card-img-top\" [src]=\"course.courseImgPath\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">{{course.name}}</h3>\r\n                <h5 class=\"card-title\">{{course.startDate |date: 'yyyy-MM-dd'}}</h5>\r\n                <p class=\"card-text\"> {{course.description}}</p>\r\n\r\n            </div>\r\n\r\n            <app-partipant-list [courseid]='course.id'></app-partipant-list>\r\n\r\n     \r\n                <div class=\"card-body\" *ngIf=\"isTeacher\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                  <!-- <a [routerLink]=\"['/Modules/AddModuleWithCourseId', course.id]\">Add Module</a> -->\r\n                  <a asp-controller=\"Modules\" asp-action=\"CreateWithCourseid\" asp-route-id=\"@Model.Id\" class=\"card-link\">Add Module</a>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <a [routerLink]=\"['/AddPartipant', course.id]\">Add Participant</a>\r\n                </div>\r\n                </div>\r\n                </div>\r\n          \r\n        </div>\r\n\r\n\r\n            <div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    <div class=\"col-md-6\">\r\n         <detail_list [courseid]=\"course.id\"></detail_list>\r\n    </div>\r\n        <div class=\"col-md-2\">\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./app/Courses/course-detail/course-detail.component.ts":
/*!**************************************************************!*\
  !*** ./app/Courses/course-detail/course-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: CourseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailComponent", function() { return CourseDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course.service */ "./app/Courses/course.service.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");





var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(route, CourseService, AuthService) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        var id = this.route.snapshot.paramMap.get('id');
        this.CourseService.getCourseAndModulebyId(id).subscribe(function (course) {
            _this.course = course;
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./course-detail.component.html */ "./app/Courses/course-detail/course-detail.component.html"),
            styles: [__webpack_require__(/*! ./course-detail.component.css */ "./app/Courses/course-detail/course-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());



/***/ }),

/***/ "./app/Courses/course-edit/course-edit.component.css":
/*!***********************************************************!*\
  !*** ./app/Courses/course-edit/course-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0NvdXJzZXMvY291cnNlLWVkaXQvY291cnNlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Courses/course-edit/course-edit.component.html":
/*!************************************************************!*\
  !*** ./app/Courses/course-edit/course-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Edit</h1>\r\n\r\n<h4>Course</h4>\r\n<hr />\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <form #mycourse=\"ngForm\" (ngSubmit)=\"UpdateCourse(mycourse.value)\">\r\n            <div class=\"form-group\">\r\n                <label for=\"Name\" class=\"control-label\">Course Name</label>\r\n                <input (ngModel)=\"Name\" name=\"Name\" class=\"form-control\" value=\"{{editCourse.name}}\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"StartDate\" class=\"control-label\">Start Date</label>\r\n                <input type=\"datetime-local\" (ngModel)=\"StartDate\" name=\"StartDate\" class=\"form-control\" date=\"{{editCourse.startdate}}\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"Description\" class=\"control-label\">Description</label>\r\n                <textarea (ngModel)=\"Description\" name=\"Description\" class=\"form-control\" cols=\"30\" rows=\"5\">{{editCourse.description}}</textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"fileData\" class=\"control-label\">File</label>\r\n                <input type=\"file\" #fileInput (ngModel)=\"fileData\" name=\"fileData\" class=\"form-control\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" value=\"Save\" class=\"btn btn-primary\" />\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <a [routerLink]=\"['/courses']\">Back to List</a>\r\n</div>\r\n"

/***/ }),

/***/ "./app/Courses/course-edit/course-edit.component.ts":
/*!**********************************************************!*\
  !*** ./app/Courses/course-edit/course-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseEditComponent", function() { return CourseEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course.service */ "./app/Courses/course.service.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");





var CourseEditComponent = /** @class */ (function () {
    function CourseEditComponent(route, router, CourseService, AuthService) {
        this.route = route;
        this.router = router;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
    }
    CourseEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id).subscribe(function (tcourse) { _this.editCourse = tcourse; }, function (error) { _this.errorMsg = error; });
    };
    CourseEditComponent.prototype.UpdateCourse = function (myCourseValues) {
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        var formData = new FormData();
        formData.append('id', this.editCourse.id.toString());
        formData.append('Name', myCourseValues.name);
        formData.append('StartDate', myCourseValues.startDate);
        formData.append('Description', myCourseValues.description);
        formData.append('FileData', fileToUpload);
        this.CourseService.EditCourse(formData).subscribe();
        this.router.navigate(['/courses']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileInput"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourseEditComponent.prototype, "fileInputVariable", void 0);
    CourseEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-edit',
            template: __webpack_require__(/*! ./course-edit.component.html */ "./app/Courses/course-edit/course-edit.component.html"),
            styles: [__webpack_require__(/*! ./course-edit.component.css */ "./app/Courses/course-edit/course-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CourseEditComponent);
    return CourseEditComponent;
}());



/***/ }),

/***/ "./app/Courses/course-list/course-list.component.css":
/*!***********************************************************!*\
  !*** ./app/Courses/course-list/course-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0NvdXJzZXMvY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Courses/course-list/course-list.component.html":
/*!************************************************************!*\
  !*** ./app/Courses/course-list/course-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" style=\"margin-bottom:15px;\">\r\n    <div class=\"col-md-4\">\r\n        <a class=\"btn btn-outline-primary\" [routerLink]=\"['/courses/create']\" *ngIf=\"isTeacher\"> Create Course</a>\r\n    </div>\r\n</div>\r\n    <div class=\"row\" *ngIf='courses && courses.length'>\r\n\r\n        <div class=\"col-md-4\" *ngFor='let course of courses'>\r\n\r\n            <div class=\"card\" style=\"width: 19rem;\">\r\n\r\n\r\n                <a [routerLink]=\"['/courses', course.id]\">\r\n                    <img class=\"card-img-top\" width=\"80px\" height=\"300px\"  [src]=\"course.courseImgPath==null?'':course.courseImgPath\" alt=\"Card image cap\" />\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">{{course.name}}</h3>\r\n\r\n                        <h5 class=\"card-title\">{{course.startDate |date: 'yyyy-MM-dd'}}</h5>\r\n\r\n\r\n                    </div>\r\n                </a>\r\n                <div class=\"card-body\" *ngIf=\"isTeacher\">\r\n                    <a class=\"card-link\" [routerLink]=\"['/courses/edit', course.id]\">Edit Course</a>\r\n                    <a class=\"card-link\" [routerLink]=\"['/courses/delete', course.id]\">Delete Course</a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./app/Courses/course-list/course-list.component.ts":
/*!**********************************************************!*\
  !*** ./app/Courses/course-list/course-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course.service */ "./app/Courses/course.service.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");




var CourseListComponent = /** @class */ (function () {
    // private userId: string;
    function CourseListComponent(CourseService, AuthService) {
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.courses = [];
        //   this.AuthService.userid.subscribe( i => this.userId=i);
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        this.CourseService.getCourses().subscribe(function (courses) {
            _this.courses = courses;
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./app/Courses/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.css */ "./app/Courses/course-list/course-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./app/Courses/course.service.ts":
/*!***************************************!*\
  !*** ./app/Courses/course.service.ts ***!
  \***************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");






var CourseService = /** @class */ (function () {
    function CourseService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.courseUrl = "https://localhost:44396/api/courses1";
        this.token = "";
        this.AuthService.token.subscribe(function (i) { return _this.token = i; });
    }
    CourseService.prototype.getCourses = function () {
        return this.http.get(this.courseUrl + "/foruser", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getCourseById = function (id) {
        return this.http.get(this.courseUrl + "/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getCourseAllById = function (id) {
        return this.http.get(this.courseUrl + "/All?id=" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getCourseAndModulebyId = function (courseid) {
        return this.http.get(this.courseUrl + "/CAndM?id=" + courseid, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getActivitybymodulId = function (Moduleid) {
        return this.http.get(this.courseUrl + "/AfromMid?id=" + Moduleid, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getModulAndActivitybyId = function (Moduleid) {
        return this.http.get(this.courseUrl + "/MAndAfromMid?id=" + Moduleid, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.createCourse = function (course) {
        return this.http.post(this.courseUrl, course, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Delete a course by a given guid.
    CourseService.prototype.DeleteCourse = function (id) {
        var urlString = this.courseUrl + "/" + id;
        return this.http.delete(urlString, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Edit a course with a given guid.
    CourseService.prototype.EditCourse = function (editCourse) {
        return this.http.put(this.courseUrl, editCourse, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./app/Courses/courses.module.ts":
/*!***************************************!*\
  !*** ./app/Courses/courses.module.ts ***!
  \***************************************/
/*! exports provided: CoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-list/course-list.component */ "./app/Courses/course-list/course-list.component.ts");
/* harmony import */ var _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-detail/course-detail.component */ "./app/Courses/course-detail/course-detail.component.ts");
/* harmony import */ var _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-course/create-course.component */ "./app/Courses/create-course/create-course.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PartipantList_partipant_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PartipantList/partipant-list.component */ "./app/PartipantList/partipant-list.component.ts");
/* harmony import */ var _detail_list_detail_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail_list/detail_list.component */ "./app/Courses/detail_list/detail_list.component.ts");
/* harmony import */ var _course_delete_course_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-delete/course-delete.component */ "./app/Courses/course-delete/course-delete.component.ts");
/* harmony import */ var _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./course-edit/course-edit.component */ "./app/Courses/course-edit/course-edit.component.ts");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Shared/shared.module */ "./app/Shared/shared.module.ts");
/* harmony import */ var _Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Shared/is-authenticated.guard */ "./app/Shared/is-authenticated.guard.ts");
/* harmony import */ var _Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Shared/is-teacher.guard */ "./app/Shared/is-teacher.guard.ts");















var CoursesModule = /** @class */ (function () {
    function CoursesModule() {
    }
    CoursesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_4__["CourseListComponent"],
                _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_5__["CourseDetailComponent"],
                _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_6__["CreateCourseComponent"],
                _PartipantList_partipant_list_component__WEBPACK_IMPORTED_MODULE_8__["PartipantListComponent"],
                _detail_list_detail_list_component__WEBPACK_IMPORTED_MODULE_9__["detailList"],
                _course_delete_course_delete_component__WEBPACK_IMPORTED_MODULE_10__["CourseDeleteComponent"],
                _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_11__["CourseEditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _Shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{
                        path: 'courses',
                        canActivate: [_Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_13__["IsAuthenticatedGuard"]],
                        component: _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_4__["CourseListComponent"]
                    },
                    {
                        path: 'courses/create',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_14__["IsTeacherGuard"]],
                        component: _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_6__["CreateCourseComponent"]
                    },
                    {
                        path: 'courses/:id',
                        canActivate: [_Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_13__["IsAuthenticatedGuard"]],
                        component: _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_5__["CourseDetailComponent"]
                    },
                    {
                        path: 'courses/delete/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_14__["IsTeacherGuard"]],
                        component: _course_delete_course_delete_component__WEBPACK_IMPORTED_MODULE_10__["CourseDeleteComponent"]
                    },
                    {
                        path: 'courses/edit/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_14__["IsTeacherGuard"]],
                        component: _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_11__["CourseEditComponent"]
                    }
                ])
            ]
        })
    ], CoursesModule);
    return CoursesModule;
}());



/***/ }),

/***/ "./app/Courses/create-course/create-course.component.css":
/*!***************************************************************!*\
  !*** ./app/Courses/create-course/create-course.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0NvdXJzZXMvY3JlYXRlLWNvdXJzZS9jcmVhdGUtY291cnNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Courses/create-course/create-course.component.html":
/*!****************************************************************!*\
  !*** ./app/Courses/create-course/create-course.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"showMsg\">\r\n    <div class=\"col-xs-12\">\r\n        <p class=\"alert alert-success\">\r\n            <strong>Registration Success!</strong> \r\n\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <form #mycourse=\"ngForm\" (ngSubmit)=\"register(mycourse.value)\">\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"name\" class=\"control-label\">Name</label>\r\n                <input (ngModel)=\"name\" name=\"name\" class=\"form-control\" />\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"startDate\" class=\"control-label\">StartDate</label>\r\n                <input type=\"date\" (ngModel)=\"startDate\"\r\n                       name=\"startDate\" class=\"form-control\" />\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"description\" class=\"control-label\">Description</label>\r\n\r\n                <textarea (ngModel)=\"description\" name=\"description\" class=\"form-control\" cols=\"30\" rows=\"5\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"fileData\" class=\"control-label\">File</label>\r\n                <input type=\"file\" #fileInput (ngModel)=\"fileData\" name=\"fileData\" class=\"form-control\" />\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" value=\"Create\" class=\"btn btn-primary\" />\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/Courses/create-course/create-course.component.ts":
/*!**************************************************************!*\
  !*** ./app/Courses/create-course/create-course.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCourseComponent", function() { return CreateCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course.service */ "./app/Courses/course.service.ts");





var CreateCourseComponent = /** @class */ (function () {
    function CreateCourseComponent(route, CourseService, router) {
        this.route = route;
        this.CourseService = CourseService;
        this.router = router;
        this.showMsg = false;
    }
    CreateCourseComponent.prototype.ngOnInit = function () {
    };
    CreateCourseComponent.prototype.register = function (formValues) {
        var _this = this;
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        var formData = new FormData();
        formData.append('Name', formValues.name);
        formData.append('StartDate', formValues.startDate);
        formData.append('Description', formValues.description);
        formData.append('FileData', fileToUpload);
        console.log(formData);
        this.CourseService.createCourse(formData).subscribe(function (result) {
            _this.showMsg = true;
            _this.router.navigate(['/courses']);
            console.log(result);
            console.log("Created a Course");
        }, function (error) { return _this.errorMessage = error; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileInput"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateCourseComponent.prototype, "fileInputVariable", void 0);
    CreateCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-course',
            template: __webpack_require__(/*! ./create-course.component.html */ "./app/Courses/create-course/create-course.component.html"),
            styles: [__webpack_require__(/*! ./create-course.component.css */ "./app/Courses/create-course/create-course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateCourseComponent);
    return CreateCourseComponent;
}());



/***/ }),

/***/ "./app/Courses/detail_list/detail_list.component.html":
/*!************************************************************!*\
  !*** ./app/Courses/detail_list/detail_list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"course && course.modules && course.modules.length>0\">\r\n    <div id=\"accordion\" >\r\n\r\n        <!--string name = Regex.Replace(@module.Name, @\"[\\W_]+\", string.Empty);-->\r\n        <div class=\"card\" *ngFor=\"let module of course.modules\">\r\n            <div class=\"card-header\" [id]=\"module.id\">\r\n                <div class=\"row\">\r\n                \r\n                    <div class=\"btn btn-link collapsed col-6\"\r\n                        [attr.data-target]=\"'#'+ module.name2\"\r\n                        [attr.aria-controls]=\"module.name2\"\r\n                        data-toggle=\"collapse\"\r\n                        [attr.aria-expanded]=\"false\"\r\n                        (click)=\"TogggelCollapse(module.id)\"\r\n                        >\r\n                        <h5 class=\"mb-0\">  \r\n                          \r\n                            {{ module.name }}\r\n                        </h5>\r\n                        \r\n                     \r\n                    </div>\r\n                    \r\n                \r\n                <div class=\"col-6 somepadding\">\r\n                        <h5 class=\"mb-0\"> \r\n                        <a [routerLink]=\"['/Modules/', module.id]\">Details</a>\r\n                    </h5>\r\n                     </div>\r\n                    </div>\r\n            </div>\r\n\r\n            <div [id]=\"module.name2\" [class]=\"'collapse'+ module.isExpanded\" [attr.aria-labelledby]=\"module.id\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\" *ngIf=\"module.activities && module.activities.length >0\">\r\n                    <h4>Activities</h4>\r\n                    <ul class=\"timeline\">\r\n\r\n                        <li *ngFor=\"let activity of module.activities\">\r\n                            <a asp-controller=\"LMSActivities\" asp-action=\"Details\" [attr.asp-route-id]=\"activity.id\">{{activity.name}}</a>\r\n                            <span class=\"float-right\"> {{activity.startDate |date: 'yyyy-MM-dd hh:mm:ss'}}</span>\r\n                            <p>{{activity.description}}\r\n                            <br>{{activity.activityType}}</p>\r\n                            <div *ngIf=\"isTeacher\">\r\n                                <a asp-controller=\"LMSActivities\" asp-action=\"Edit\" [attr.asp-route-id]=\"activity.id\">Edit Activity</a>&nbsp;|&nbsp;\r\n                                <a asp-controller=\"LMSActivities\" asp-action=\"Delete\" [attr.asp-route-id]=\"activity.id\">Delete Activity</a>\r\n                            </div>\r\n                        </li>\r\n\r\n                    </ul>\r\n                    <div *ngIf=\"isTeacher\">\r\n                        Add Activity\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n     </div>\r\n\r\n</div>"

/***/ }),

/***/ "./app/Courses/detail_list/detail_list.component.ts":
/*!**********************************************************!*\
  !*** ./app/Courses/detail_list/detail_list.component.ts ***!
  \**********************************************************/
/*! exports provided: detailList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailList", function() { return detailList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course.service */ "./app/Courses/course.service.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");





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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], detailList.prototype, "courseid", void 0);
    detailList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "detail_list",
            template: __webpack_require__(/*! ./detail_list.component.html */ "./app/Courses/detail_list/detail_list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], detailList);
    return detailList;
}());



/***/ }),

/***/ "./app/Login/Login/login.component.css":
/*!*********************************************!*\
  !*** ./app/Login/Login/login.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL0xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Login/Login/login.component.html":
/*!**********************************************!*\
  !*** ./app/Login/Login/login.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4\">\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"user.username\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.userName\" #username=\"ngModel\" required />\r\n        <div class=\"text-danger\" *ngIf=\"user.userName.touched && user.userName.invalid && user.userName.errors.required\" >Username is required!</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"user.password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"passWord\" [(ngModel)]=\"user.passWord\" required #password=\"ngModel\" />\r\n        <div class=\"text-danger\" *ngIf=\"user.passWord.touched && user.passWord.invalid && user.passWord.errors.required\">Password is required!</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"form-check\">\r\n          <input for=\"user.rememberMe\" type=\"checkbox\" name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" class=\"form-check-input\" />\r\n          <label for=\"user.rememberMe\" class=\"form-check-label\" >Remember Me?</label>\r\n        </div>\r\n        <span asp-validation-for=\"RememberMe\" class=\"text-warning\"></span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n        <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./app/Login/Login/login.component.ts":
/*!********************************************!*\
  !*** ./app/Login/Login/login.component.ts ***!
  \********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login */ "./app/Login/login.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(db, router) {
        this.db = db;
        this.router = router;
        this.user = new _login__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.errorMessage = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user.userName = "";
        this.user.passWord = "";
        this.user.rememberMe = false;
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.errorMessage = "";
        this.db.login(this.user)
            .subscribe(function (success) {
            if (success)
                _this.router.navigate(["courses"]);
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./app/Login/Login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./app/Login/Login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/Login/LoginPartial/loginpartial.component.css":
/*!***********************************************************!*\
  !*** ./app/Login/LoginPartial/loginpartial.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL0xvZ2luUGFydGlhbC9sb2dpbnBhcnRpYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Login/LoginPartial/loginpartial.component.html":
/*!************************************************************!*\
  !*** ./app/Login/LoginPartial/loginpartial.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav\">\r\n <div *ngIf=\"isAuthenticated; else LoggedOut\">\r\n      <li class=\"nav-item\" >\r\n          <a [routerLink]=\"['/Account/Manage']\">\r\n              Hello\r\n              \r\n                  <span>{{firstName}} {{lastName}}</span>\r\n              \r\n          </a>\r\n      </li>\r\n          <li class=\"nav-item\" *ngIf=\"isTeacher\">\r\n              <a [routerLink]=\"['/Account/Register']\">Register</a>\r\n          </li>\r\n      \r\n      <li class=\"nav-item\">\r\n            <button (click)=\"logout()\">Logout</button>\r\n\r\n      </li>\r\n    </div>\r\n\r\n<ng-template #LoggedOut>\r\n\r\n\r\n      <li class=\"nav-item\">\r\n        <a [routerLink]=\"['/Account/Login']\">Login</a>\r\n      </li>\r\n\r\n</ng-template>\r\n</ul>"

/***/ }),

/***/ "./app/Login/LoginPartial/loginpartial.component.ts":
/*!**********************************************************!*\
  !*** ./app/Login/LoginPartial/loginpartial.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginpartialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpartialComponent", function() { return LoginpartialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");



var LoginpartialComponent = /** @class */ (function () {
    function LoginpartialComponent(AuthService) {
        this.AuthService = AuthService;
    }
    LoginpartialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isAuthenticated.subscribe(function (i) { return _this.isAuthenticated = i; });
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        this.AuthService.firstName.subscribe(function (fn) { return _this.firstName = fn; });
        this.AuthService.lastName.subscribe(function (ln) { return _this.lastName = ln; });
    };
    LoginpartialComponent.prototype.logout = function () {
        this.AuthService.logout();
    };
    LoginpartialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loginpartial',
            template: __webpack_require__(/*! ./loginpartial.component.html */ "./app/Login/LoginPartial/loginpartial.component.html"),
            styles: [__webpack_require__(/*! ./loginpartial.component.css */ "./app/Login/LoginPartial/loginpartial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginpartialComponent);
    return LoginpartialComponent;
}());



/***/ }),

/***/ "./app/Login/Register/register.component.css":
/*!***************************************************!*\
  !*** ./app/Login/Register/register.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL1JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Login/Register/register.component.html":
/*!****************************************************!*\
  !*** ./app/Login/Register/register.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n        <h4>Create a new account.</h4>\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n      <form (submit)=\"onRegister()\" #theForm=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n              <label for=\"user.email\">Email</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required />\r\n              <div class=\"text-danger\" *ngIf=\"user.email.touched && user.email.invalid && user.email.errors.required\" >Email is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n                <label for=\"user.firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"user.firstName.touched && user.firstName.invalid && user.firstName.errors.required\" >First Name is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n                  <label for=\"user.lastName\">Last Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\" required />\r\n                  <div class=\"text-danger\" *ngIf=\"user.lastName.touched && user.lastName.invalid && user.lastName.errors.required\" >Last Name is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"user.password\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" required #password=\"ngModel\" />\r\n              <div class=\"text-danger\" *ngIf=\"user.password.touched && user.password.invalid && user.password.errors.required\">Password is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"user.confirmpassword\">Confirm Password</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" [(ngModel)]=\"user.confirmpassword\" required #confirmpassword=\"ngModel\" />\r\n              <div class=\"text-danger\" *ngIf=\"user.confirmpassword.touched && user.confirmpassword.invalid && user.confirmpassword.errors.required\">Confirm Password is required!</div>\r\n              <div class=\"text-danger\" *ngIf=\"user.confirmpassword.touched && user.password.touched && user.confirmpassword!=user.password\">The password and the confirm password needs to be alike</div>\r\n          </div>\r\n          <div class=\"form-group\">  \r\n              <label for=\"user.role\">Role</label>\r\n              <select class=\"form-control\" id=\"role\" [(ngModel)]=\"user.role\" name=\"role\" required #role=\"ngModel\">\r\n                  <option value=\"Student\" selected>Student</option>\r\n                  <option value=\"Teacher\">Teacher</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid\" />\r\n              <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n          </div>    \r\n        </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./app/Login/Register/register.component.ts":
/*!**************************************************!*\
  !*** ./app/Login/Register/register.component.ts ***!
  \**************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registeruser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registeruser */ "./app/Login/Register/registeruser.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(db, router) {
        this.db = db;
        this.router = router;
        this.user = new _registeruser__WEBPACK_IMPORTED_MODULE_2__["RegisterUser"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./app/Login/Register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./app/Login/Register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./app/Login/Register/registeruser.ts":
/*!********************************************!*\
  !*** ./app/Login/Register/registeruser.ts ***!
  \********************************************/
/*! exports provided: RegisterUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUser", function() { return RegisterUser; });
var RegisterUser = /** @class */ (function () {
    function RegisterUser() {
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.password = "";
        this.confirmpassword = "";
        this.role = "Student";
    }
    return RegisterUser;
}());



/***/ }),

/***/ "./app/Login/login.module.ts":
/*!***********************************!*\
  !*** ./app/Login/login.module.ts ***!
  \***********************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login/login.component */ "./app/Login/Login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _LoginPartial_loginpartial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginPartial/loginpartial.component */ "./app/Login/LoginPartial/loginpartial.component.ts");
/* harmony import */ var _Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/is-teacher.guard */ "./app/Shared/is-teacher.guard.ts");
/* harmony import */ var _Register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Register/register.component */ "./app/Login/Register/register.component.ts");









var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_Login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _LoginPartial_loginpartial_component__WEBPACK_IMPORTED_MODULE_6__["LoginpartialComponent"],
                _Register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
                        path: 'Account/Login', component: _Login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
                    },
                    {
                        path: 'Account/Register',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _Register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
                    }
                ])
            ],
            exports: [_LoginPartial_loginpartial_component__WEBPACK_IMPORTED_MODULE_6__["LoginpartialComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./app/Login/login.ts":
/*!****************************!*\
  !*** ./app/Login/login.ts ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./app/Modules/Activity_list/actitity_list.component.html":
/*!****************************************************************!*\
  !*** ./app/Modules/Activity_list/actitity_list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"module && module.activities && module.activities.length>0\">\r\n  <div id=\"accordion\" >\r\n\r\n      <!--string name = Regex.Replace(@module.Name, @\"[\\W_]+\", string.Empty);-->\r\n      <div class=\"card\" *ngFor=\"let activity of module.activities\">\r\n          <div class=\"card-header\" [id]=\"module.id\">\r\n              \r\n                  <div class=\"btn btn-link collapsed\"\r\n                      [attr.data-target]=\"'#'+ activity.name2\"\r\n                      [attr.aria-controls]=\"activity.name2\"\r\n                      data-toggle=\"collapse\"\r\n                      [attr.aria-expanded]=\"false\"\r\n                      (click)=\"TogggelCollapse(activity.id)\"\r\n                      >\r\n                      <h5 class=\"mb-0\"> \r\n                          {{ activity.name }}\r\n                        </h5>\r\n                  </div>\r\n              \r\n          </div>\r\n\r\n          <div [id]=\"activity.name2\" [class]=\"'collapse'+ activity.isExpanded\" [attr.aria-labelledby]=\"activity.id\" data-parent=\"#accordion\">\r\n              <div class=\"card-body\" *ngIf=\"module.activities && module.activities.length >0\">\r\n                    <span class=\"float-right\"> {{activity.startDate |date: 'yyyy-MM-dd HH:mm'}} -{{activity.endDate |date: 'yyyy-MM-dd HH:mm'}}</span>\r\n                    <p>{{activity.description}}\r\n                    <br>{{activity.activityType}}</p>\r\n                  <!-- Place for files under here-->\r\n                  <h4>Activities</h4>\r\n                  <ul class=\"timeline\">\r\n\r\n                      <li *ngFor=\"let activity of module.activities\">\r\n                            \r\n                          <a asp-controller=\"LMSActivities\" asp-action=\"Details\" [attr.asp-route-id]=\"activity.id\">{{activity.name}}</a>\r\n                          <span class=\"float-right\"> {{activity.startDate |date: 'yyyy-MM-dd hh:mm:ss'}}</span>\r\n                          <p>{{activity.description}}\r\n                          <br>{{activity.activityType.name}}</p>\r\n                          <div *ngIf=\"isTeacher\">\r\n                              <a asp-controller=\"LMSActivities\" asp-action=\"Edit\" [attr.asp-route-id]=\"activity.id\">Edit Activity</a>&nbsp;|&nbsp;\r\n                              <a asp-controller=\"LMSActivities\" asp-action=\"Delete\" [attr.asp-route-id]=\"activity.id\">Delete Activity</a>\r\n                          </div>\r\n                      </li>\r\n\r\n                  </ul>\r\n                  <div *ngIf=\"isTeacher\">\r\n                      Add Activity\r\n                  </div>\r\n              </div>\r\n\r\n          </div>\r\n\r\n      </div>\r\n\r\n   </div>\r\n\r\n</div>"

/***/ }),

/***/ "./app/Modules/Activity_list/actitity_list.component.ts":
/*!**************************************************************!*\
  !*** ./app/Modules/Activity_list/actitity_list.component.ts ***!
  \**************************************************************/
/*! exports provided: ActitityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActitityListComponent", function() { return ActitityListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ClientApp_app_Courses_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/Courses/course.service */ "./app/Courses/course.service.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");





var ActitityListComponent = /** @class */ (function () {
    function ActitityListComponent(route, CourseService, AuthService) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.isTeacher = false;
    }
    ActitityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.isTeacher.subscribe(function (i) { return _this.isTeacher = i; });
        //getModulAndActivitybyId(Moduleid: string) : Observable<IModule>
        this.CourseService.getModulAndActivitybyId(this.moduleid).subscribe(function (module) {
            _this.module = module;
        }, function (error) { return _this.errorMessage = error; });
    };
    ActitityListComponent.prototype.TogggelCollapse = function (aid) {
        if (this.module.activities.find(function (m) { return m.id.toString() == aid; }).isExpanded == " show") {
            this.module.activities.find(function (m) { return m.id.toString() == aid; }).isExpanded = "";
            // add here for filelist for activity
            /*  if (this.savesubs.find( t => t[0]==mid))
              {
   
                  this.savesubs.find( t => t[0]==mid)[1].unsubscribe();
                  this.savesubs.splice(this.savesubs.indexOf(this.savesubs.find( t => t[0]==mid)),1);
              }
   */
        }
        else {
            this.module.activities.find(function (m) { return m.id.toString() == aid; }).isExpanded = " show";
            /* let temp=this.CourseService.getActivitybymodulId(mid).subscribe(
                      activities=>
                      {
                          this.course.modules.find(m => m.id.toString()==mid).activities=activities;
                      },
                      error => this.errorMessage = <any>error
                  );
              if (this.savesubs.find( t => t[0]==mid))
              {
                  this.savesubs.find( t => t[0]==mid)[1]=temp;
              }
              else
              {
                  this.savesubs.push([mid,temp])  ;
              }
              */
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ActitityListComponent.prototype, "moduleid", void 0);
    ActitityListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "activity_list",
            template: __webpack_require__(/*! ./actitity_list.component.html */ "./app/Modules/Activity_list/actitity_list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ClientApp_app_Courses_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"],
            ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ActitityListComponent);
    return ActitityListComponent;
}());



/***/ }),

/***/ "./app/Modules/Create/add-module-with-course-id.component.css":
/*!********************************************************************!*\
  !*** ./app/Modules/Create/add-module-with-course-id.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL01vZHVsZXMvQ3JlYXRlL2FkZC1tb2R1bGUtd2l0aC1jb3Vyc2UtaWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Modules/Create/add-module-with-course-id.component.html":
/*!*********************************************************************!*\
  !*** ./app/Modules/Create/add-module-with-course-id.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create</h1>\t\r\n\r\n <h4>Module on {{courseID}}</h4>\t\r\n<hr />\t\r\n<div class=\"row\">\t\r\n    <div class=\"col-md-4\">\t\r\n\r\n         <form #createModule=\"ngForm\"  (ngSubmit)=\"Create(createModule.value)\">\t\r\n\r\n             <input type=\"hidden\" (ngModel)=\"CourseId\" name=\"CourseId\" />\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"name\" class=\"control-label\">Name</label>\t\r\n                <input (ngModel)=\"Module.name\" name=\"name\" id=\"name\" class=\"form-control\" />\t\r\n\r\n             </div>\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"startDate\" class=\"control-label\">StartDate</label>\t\r\n                <input  type =\"date\" (ngModel)=\"Module.startDate\" name=\"startDate\"  value=\"2018-07-22\"\t\r\n                  min=\"2018-01-01\" max=\"2018-12-31\" id=\"startDate\" class=\"form-control\" />\t\r\n\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"endDate\" class=\"control-label\">StartDate</label>\t\r\n                <input  type =\"date\" (ngModel)=\"Module.endDate\" name=\"endDate\"  value=\"2018-07-22\"\t\r\n                  min=\"2018-01-01\" max=\"2018-12-31\" id=\"endDate\" class=\"form-control\" />\t\r\n\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"description\" class=\"control-label\">Description</label>\t\r\n                <input (ngModel)=\"Module.description\" name=\"description\" id=\"description\" class=\"form-control\" />\t\r\n\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <input type=\"submit\" value=\"Create\" class=\"btn btn-primary\" />\t\r\n            </div>\t\r\n        </form>\t\r\n\r\n\r\n     </div>\t\r\n</div> "

/***/ }),

/***/ "./app/Modules/Create/add-module-with-course-id.component.ts":
/*!*******************************************************************!*\
  !*** ./app/Modules/Create/add-module-with-course-id.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddModuleWithCourseIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModuleWithCourseIdComponent", function() { return AddModuleWithCourseIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var AddModuleWithCourseIdComponent = /** @class */ (function () {
    function AddModuleWithCourseIdComponent(route) {
        this.route = route;
        this.CourseId = "";
    }
    AddModuleWithCourseIdComponent.prototype.ngOnInit = function () {
        this.CourseId = this.route.snapshot.paramMap.get('id');
    };
    AddModuleWithCourseIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-module-with-course-id',
            template: __webpack_require__(/*! ./add-module-with-course-id.component.html */ "./app/Modules/Create/add-module-with-course-id.component.html"),
            styles: [__webpack_require__(/*! ./add-module-with-course-id.component.css */ "./app/Modules/Create/add-module-with-course-id.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddModuleWithCourseIdComponent);
    return AddModuleWithCourseIdComponent;
}());



/***/ }),

/***/ "./app/Modules/Details/details.component.css":
/*!***************************************************!*\
  !*** ./app/Modules/Details/details.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL01vZHVsZXMvRGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Modules/Details/details.component.html":
/*!****************************************************!*\
  !*** ./app/Modules/Details/details.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"module\">\r\n  <div class=\"row\">\r\n  \r\n      <div class=\"col-md-4\">\r\n          <div class=\"card\" style=\"width: 19rem;\">\r\n              <div class=\"card-body\">\r\n                  <h3 class=\"card-title\">{{module.name}}</h3>\r\n                  <h5 class=\"card-title\">{{module.startDate |date: 'yyyy-MM-dd'}} - {{module.endDate |date: 'yyyy-MM-dd'}}</h5>\r\n                  <p class=\"card-text\"> {{module.description}}</p>\r\n  \r\n              </div>\r\n  \r\n       \r\n                  <div class=\"card-body\" *ngIf=\"isTeacher\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-6\">\r\n                    <!-- <a [routerLink]=\"['/Modules/Edit', module.id]\">Activity/a> -->\r\n                    <a asp-controller=\"Modules\" asp-action=\"CreateWithCourseid\" asp-route-id=\"@Model.Id\" class=\"card-link\">Edit module</a>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                      <!--<a [routerLink]=\"['/Modules/Delete', module.id]\">Delete module</a> -->\r\n                      Delete module\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <!-- <a [routerLink]=\"['/Activites/AddActivityWithModuleId', .id]\">Activity/a> -->\r\n                    <a asp-controller=\"Modules\" asp-action=\"CreateWithCourseid\" asp-route-id=\"@Model.Id\" class=\"card-link\">Add Actitiy</a>\r\n                  </div>\r\n                  </div>\r\n                  </div>\r\n            \r\n          </div>\r\n        </div>\r\n  \r\n      <div class=\"col-md-6\">\r\n           <activity_list [moduleid]=\"module.id\"></activity_list>\r\n      </div>\r\n          <div class=\"col-md-2\">\r\n  \r\n          </div>\r\n      </div>\r\n  "

/***/ }),

/***/ "./app/Modules/Details/details.component.ts":
/*!**************************************************!*\
  !*** ./app/Modules/Details/details.component.ts ***!
  \**************************************************/
/*! exports provided: ModulDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulDetailsComponent", function() { return ModulDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ClientApp_app_Courses_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/Courses/course.service */ "./app/Courses/course.service.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");





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
    ModulDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./app/Modules/Details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./app/Modules/Details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ClientApp_app_Courses_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ModulDetailsComponent);
    return ModulDetailsComponent;
}());



/***/ }),

/***/ "./app/Modules/modules.module.ts":
/*!***************************************!*\
  !*** ./app/Modules/modules.module.ts ***!
  \***************************************/
/*! exports provided: ModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesModule", function() { return ModulesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Create_add_module_with_course_id_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Create/add-module-with-course-id.component */ "./app/Modules/Create/add-module-with-course-id.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Activity_list_actitity_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Activity_list/actitity_list.component */ "./app/Modules/Activity_list/actitity_list.component.ts");
/* harmony import */ var _Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/is-authenticated.guard */ "./app/Shared/is-authenticated.guard.ts");
/* harmony import */ var _Details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Details/details.component */ "./app/Modules/Details/details.component.ts");









var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _Create_add_module_with_course_id_component__WEBPACK_IMPORTED_MODULE_3__["AddModuleWithCourseIdComponent"],
                _Activity_list_actitity_list_component__WEBPACK_IMPORTED_MODULE_6__["ActitityListComponent"],
                _Details_details_component__WEBPACK_IMPORTED_MODULE_8__["ModulDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: 'Modules/create', component: _Create_add_module_with_course_id_component__WEBPACK_IMPORTED_MODULE_3__["AddModuleWithCourseIdComponent"]
                    },
                    {
                        path: 'Modules/:id',
                        canActivate: [_Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_7__["IsAuthenticatedGuard"]],
                        component: _Details_details_component__WEBPACK_IMPORTED_MODULE_8__["ModulDetailsComponent"]
                    }
                ])
            ]
        })
    ], ModulesModule);
    return ModulesModule;
}());



/***/ }),

/***/ "./app/Navbar/navbar.component.css":
/*!*****************************************!*\
  !*** ./app/Navbar/navbar.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL05hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Navbar/navbar.component.html":
/*!******************************************!*\
  !*** ./app/Navbar/navbar.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n      <div class=\"container\">\r\n          <a class=\"navbar-brand\">LMS(Learning Management System)</a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"navbarSupportedContent\"\r\n                  aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n          <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\">\r\n            <loginpartial></loginpartial>\r\n              <ul class=\"navbar-nav flex-grow-1\">\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link text-dark\" >Home</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link text-dark\">Privacy</a>\r\n                  </li>\r\n                  \r\n              </ul>\r\n          </div>\r\n      </div>\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "./app/Navbar/navbar.component.ts":
/*!****************************************!*\
  !*** ./app/Navbar/navbar.component.ts ***!
  \****************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./app/Navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./app/Navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./app/Navbar/navbar.module.ts":
/*!*************************************!*\
  !*** ./app/Navbar/navbar.module.ts ***!
  \*************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar/navbar.component */ "./app/Navbar/navbar.component.ts");
/* harmony import */ var _Login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Login/login.module */ "./app/Login/login.module.ts");





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_Navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _Login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"]
            ],
            exports: [_Navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./app/NoRoute/no-route.component.css":
/*!********************************************!*\
  !*** ./app/NoRoute/no-route.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL05vUm91dGUvbm8tcm91dGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/NoRoute/no-route.component.html":
/*!*********************************************!*\
  !*** ./app/NoRoute/no-route.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n   Not route here.\r\n  </h1>\r\n</div>\r\n"

/***/ }),

/***/ "./app/NoRoute/no-route.component.ts":
/*!*******************************************!*\
  !*** ./app/NoRoute/no-route.component.ts ***!
  \*******************************************/
/*! exports provided: NoRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRouteComponent", function() { return NoRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var NoRouteComponent = /** @class */ (function () {
    function NoRouteComponent() {
        this.title = 'Test';
    }
    NoRouteComponent.prototype.ngOnInit = function () {
    };
    NoRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-route',
            template: __webpack_require__(/*! ./no-route.component.html */ "./app/NoRoute/no-route.component.html"),
            styles: [__webpack_require__(/*! ./no-route.component.css */ "./app/NoRoute/no-route.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoRouteComponent);
    return NoRouteComponent;
}());



/***/ }),

/***/ "./app/NoRoute/no-route.module.ts":
/*!****************************************!*\
  !*** ./app/NoRoute/no-route.module.ts ***!
  \****************************************/
/*! exports provided: NoRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRouteModule", function() { return NoRouteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _no_route_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-route.component */ "./app/NoRoute/no-route.component.ts");




var NoRouteModule = /** @class */ (function () {
    function NoRouteModule() {
    }
    NoRouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_no_route_component__WEBPACK_IMPORTED_MODULE_3__["NoRouteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], NoRouteModule);
    return NoRouteModule;
}());



/***/ }),

/***/ "./app/PartipantList/partipant-list.component.css":
/*!********************************************************!*\
  !*** ./app/PartipantList/partipant-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL1BhcnRpcGFudExpc3QvcGFydGlwYW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/PartipantList/partipant-list.component.html":
/*!*********************************************************!*\
  !*** ./app/PartipantList/partipant-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"users && users.length>0\">\r\n  <ul  *ngFor=\"let user of users\">\r\n    <li>{{user.firstName}} {{user.lastName}}</li>\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./app/PartipantList/partipant-list.component.ts":
/*!*******************************************************!*\
  !*** ./app/PartipantList/partipant-list.component.ts ***!
  \*******************************************************/
/*! exports provided: PartipantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartipantListComponent", function() { return PartipantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AddPartipant/partipant.service */ "./app/AddPartipant/partipant.service.ts");




var PartipantListComponent = /** @class */ (function () {
    function PartipantListComponent(route, PartipantService) {
        this.route = route;
        this.PartipantService = PartipantService;
        this.courseid = "";
    }
    PartipantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PartipantService.CourseId = this.courseid;
        this.PartipantService.GetStudentsOn().subscribe(function (user) {
            _this.users = user;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PartipantListComponent.prototype, "courseid", void 0);
    PartipantListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partipant-list',
            template: __webpack_require__(/*! ./partipant-list.component.html */ "./app/PartipantList/partipant-list.component.html"),
            styles: [__webpack_require__(/*! ./partipant-list.component.css */ "./app/PartipantList/partipant-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_3__["PartipantService"]])
    ], PartipantListComponent);
    return PartipantListComponent;
}());



/***/ }),

/***/ "./app/Shared/is-authenticated.guard.ts":
/*!**********************************************!*\
  !*** ./app/Shared/is-authenticated.guard.ts ***!
  \**********************************************/
/*! exports provided: IsAuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticatedGuard", function() { return IsAuthenticatedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");




var IsAuthenticatedGuard = /** @class */ (function () {
    function IsAuthenticatedGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    IsAuthenticatedGuard.prototype.canLoad = function (route, segments) {
        if (!(this.auth.IsAuthenticated())) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsAuthenticatedGuard.prototype.canActivate = function () {
        //  this.auth.isTeacher.subscribe((i:Boolean) => {return i});
        if (!(this.auth.IsAuthenticated())) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsAuthenticatedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsAuthenticatedGuard);
    return IsAuthenticatedGuard;
}());



/***/ }),

/***/ "./app/Shared/is-teacher.guard.ts":
/*!****************************************!*\
  !*** ./app/Shared/is-teacher.guard.ts ***!
  \****************************************/
/*! exports provided: IsTeacherGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTeacherGuard", function() { return IsTeacherGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");




var IsTeacherGuard = /** @class */ (function () {
    function IsTeacherGuard(auth, router) {
        this.auth = auth;
        this.router = router;
        this.isTeacher = false;
    }
    IsTeacherGuard.prototype.canLoad = function (route, segments) {
        if (!(this.auth.IsTeacher())) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsTeacherGuard.prototype.canActivate = function () {
        //  this.auth.isTeacher.subscribe((i:Boolean) => {return i});
        if (!(this.auth.IsTeacher())) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsTeacherGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsTeacherGuard);
    return IsTeacherGuard;
}());



/***/ }),

/***/ "./app/Shared/shared.module.ts":
/*!*************************************!*\
  !*** ./app/Shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Test';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _AddPartipant_add_partipant_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddPartipant/add-partipant.module */ "./app/AddPartipant/add-partipant.module.ts");
/* harmony import */ var _NoRoute_no_route_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NoRoute/no-route.module */ "./app/NoRoute/no-route.module.ts");
/* harmony import */ var _NoRoute_no_route_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NoRoute/no-route.component */ "./app/NoRoute/no-route.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Courses_courses_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Courses/courses.module */ "./app/Courses/courses.module.ts");
/* harmony import */ var _Navbar_navbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navbar/navbar.module */ "./app/Navbar/navbar.module.ts");
/* harmony import */ var _Login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Login/login.module */ "./app/Login/login.module.ts");
/* harmony import */ var _Modules_modules_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Modules/modules.module */ "./app/Modules/modules.module.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _AddPartipant_add_partipant_module__WEBPACK_IMPORTED_MODULE_6__["AddPartipantModule"],
                _Courses_courses_module__WEBPACK_IMPORTED_MODULE_10__["CoursesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '**', component: _NoRoute_no_route_component__WEBPACK_IMPORTED_MODULE_8__["NoRouteComponent"]
                    }
                ], {
                    enableTracing: false // for debug
                }),
                _NoRoute_no_route_module__WEBPACK_IMPORTED_MODULE_7__["NoRouteModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _Navbar_navbar_module__WEBPACK_IMPORTED_MODULE_11__["NavbarModule"],
                _Login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"],
                _Modules_modules_module__WEBPACK_IMPORTED_MODULE_13__["ModulesModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./app/auth/auth.service.ts ***!
  \**********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _tokenData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokenData */ "./app/auth/tokenData.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");


//import { JwtHelperService } from '@auth0/angular-jwt';




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        // ...public jwtHelper: JwtHelperService,
        this.tokenData = new _tokenData__WEBPACK_IMPORTED_MODULE_4__["tokenData"]();
        this.tokenSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](' ');
        this.token = this.tokenSource.asObservable();
        this.tokenExpirationSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new Date());
        this.tokenExpiration = this.tokenExpirationSource.asObservable();
        this.firstNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](' ');
        this.firstName = this.firstNameSource.asObservable();
        this.lastNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](' ');
        this.lastName = this.lastNameSource.asObservable();
        /*
        private useridSource = new BehaviorSubject(' ');
        userid = this.useridSource.asObservable();
        */
        this.isAuthenticatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.isAuthenticated = this.isAuthenticatedSource.asObservable();
        this.isTeacherSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.isTeacher = this.isTeacherSource.asObservable();
        this.RealisAuthenticated = false;
        this.RealisTeacher = false;
        /*
        ngOnInit(): void {
          this.isAuthenticated.subscribe( i => this.RealisAuthenticated=i);
          this.isTeacher.subscribe(i => this.RealisTeacher=i);
        }*/
        /*
          get token(): Observable<string> {
            return this.tokenData.token
          }
          
        
          get tokenExpiration():Date
          {
            return this.tokenData.tokenExpiration;
          }
        
        
          get FirstName():string
          {
            return this.tokenData.firstName;
          }
        
          get LastName():string
          {
            return this.tokenData.lastName;
          }
          get Userid():string
          {
            return this.tokenData.userid;
          }
          */
        this.url = "https://localhost:44396";
        this._isTeacher = "";
        this.isAuthenticated.subscribe(function (i) { return _this.RealisAuthenticated = i; });
        this.isTeacher.subscribe(function (i) { return _this.RealisTeacher = i; });
    }
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post(this.url + "/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var tokenInfo = response;
            _this.tokenSource.next(tokenInfo.token == null ? '' : tokenInfo.token);
            _this.tokenExpirationSource.next(tokenInfo.tokenExpiration);
            _this.firstNameSource.next(tokenInfo.firstName);
            _this.lastNameSource.next(tokenInfo.lastName);
            //    this.useridSource.next(tokenInfo.userid);
            _this.isAuthenticatedSource.next(_this.checkisAuthenticated(tokenInfo.token, tokenInfo.tokenExpiration));
            _this.isTeacherSource.next(_this.checkisAuthenticated(tokenInfo.token, tokenInfo.tokenExpiration) ? _this.checkIsTeacher(tokenInfo.isTeacher) : false);
            _this.tokenData.token = tokenInfo.token;
            _this.tokenData.tokenExpiration = tokenInfo.expiration;
            _this.tokenData.isTeacher = tokenInfo.isTeacher;
            _this.tokenData.firstName = tokenInfo.firstName;
            _this.tokenData.lastName = tokenInfo.lastName;
            _this.tokenData.userid = tokenInfo.userid;
            return true;
        }));
    };
    //  
    AuthService.prototype.IsAuthenticated = function () {
        return this.RealisAuthenticated;
    };
    AuthService.prototype.IsTeacher = function () {
        return this.RealisTeacher;
    };
    AuthService.prototype.logout = function () {
        this.tokenData = new _tokenData__WEBPACK_IMPORTED_MODULE_4__["tokenData"]();
    };
    AuthService.prototype.checkisAuthenticated = function (token, tokenExpiration) {
        return !(token.length == 0 && tokenExpiration > new Date());
    };
    AuthService.prototype.checkIsTeacher = function (isTeacher) {
        if (isTeacher == "Teacher")
            return true;
        return false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./app/auth/tokenData.ts":
/*!*******************************!*\
  !*** ./app/auth/tokenData.ts ***!
  \*******************************/
/*! exports provided: tokenData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenData", function() { return tokenData; });
var tokenData = /** @class */ (function () {
    function tokenData() {
        this.token = "";
        this.tokenExpiration = new Date();
        this.isTeacher = "";
        this.firstName = "";
        this.lastName = "";
        this.userid = "";
    }
    return tokenData;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hanwen\source\repos\LMS_1_1\LMS_1_1\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map