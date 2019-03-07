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

module.exports = "<div class='card'>\r\n  <div class='card-header'>\r\n       {{pageTitle}}\r\n  </div>\r\n  <div class='card-body'>\r\n      <div class=\"row\">\r\n      <div class=\"col-md-2\">Filtera</div>\r\n        <div class='col-md-4'>\r\n            <input type='text'  [(ngModel)]='listFilter'/>\r\n        </div>\r\n  </div>\r\n  <div class='row'>\r\n      <div class='col-md-6'>\r\n          <h4 *ngIf='listFilter'> Filtered by:{{listFilter}}</h4>\r\n          <div class=\"table-responsive\">\r\n            <label>Choose among these</labe>\r\n            <table class=\"table\" *ngIf=\"ChooseFrom && ChooseFrom.length\">\r\n\r\n                <thead>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                </thead>\r\n                <tbody >\r\n                      <tr *ngFor='let Choose of ChooseFrom'>\r\n                          <td (click)=\"chooseStudent()\">{{Choose.FirstName}}</td>\r\n                          <td (click)=\"chooseStudent()\">{{Choose.LastName}}</td>\r\n                      </tr>\r\n\r\n                  </tbody>\r\n\r\n            </table>\r\n      \r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n<div class=\"col-md-6\">\r\n\r\n    <button class=\"btn btn-success\" (click)=\"SaveStudents()\">Save</button>\r\n    <div class=\"table-responsive\">\r\n        <label>Click here to unchoose</labe>\r\n          <table class=\"table\" *ngIf=\"Choosed && Choosed.length\">\r\n              <thead>\r\n                  <th>First Name</th>\r\n                  <th>Last Name</th>\r\n              </thead>\r\n              <tbody >\r\n                    <tr *ngFor='let UnChoose of Choosed'>\r\n                        <td (click)=\"unChooseStudent()\">{{UnChoose.FirstName}}</td>\r\n                        <td (click)=\"unChooseStudent()\">{{UnChoose.LastName}}</td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n\r\n          </table>\r\n        </div>   \r\n  </div>\r\n        </div>\r\n    </div>\r\n\r\n   </div> \r\n"

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
    }
    AddPartipantComponent.prototype.ngOnInit = function () {
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



var PartipantService = /** @class */ (function () {
    function PartipantService(http, CourseId) {
        this.http = http;
        this.CourseId = CourseId;
        this.Choosed = [];
    }
    /*
    public GetStudents(choosed : boolean): Observable<Partipant[] | undefined>
    {
        let url:string="/CourseUsers/AddStudentsToCourse";

    }
*/
    PartipantService.prototype.SaveStudents = function () {
    };
    PartipantService.prototype.AddStudent = function (user) {
        var item = this.Choosed.find(function (i) { return i.Userid == user.Userid; });
        if (!item) {
            this.Choosed.push(user);
        }
    };
    PartipantService.prototype.RemoveStudent = function (user) {
        var item = this.Choosed.find(function (i) { return i.Userid == user.Userid; });
        var index = this.Choosed.indexOf(item);
        if (item) {
            this.Choosed.splice(index, 1);
        }
    };
    PartipantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], PartipantService);
    return PartipantService;
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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");



var IsTeacherGuard = /** @class */ (function () {
    function IsTeacherGuard(auth) {
        this.auth = auth;
    }
    IsTeacherGuard.prototype.canActivate = function (route, state) {
        return this.auth.IsTeacher();
    };
    IsTeacherGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], IsTeacherGuard);
    return IsTeacherGuard;
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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _AddPartipant_add_partipant_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddPartipant/add-partipant.module */ "./app/AddPartipant/add-partipant.module.ts");
/* harmony import */ var _NoRoute_no_route_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NoRoute/no-route.module */ "./app/NoRoute/no-route.module.ts");
/* harmony import */ var _NoRoute_no_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NoRoute/no-route.component */ "./app/NoRoute/no-route.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _AddPartipant_add_partipant_module__WEBPACK_IMPORTED_MODULE_5__["AddPartipantModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '**', component: _NoRoute_no_route_component__WEBPACK_IMPORTED_MODULE_7__["NoRouteComponent"] }
                ], {
                    enableTracing: false // for debug
                }),
                _NoRoute_no_route_module__WEBPACK_IMPORTED_MODULE_6__["NoRouteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "../node_modules/@auth0/angular-jwt/index.js");



var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    // ...
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.IsTeacher = function () {
        var token = localStorage.getItem('token');
        if (this.jwtHelper.isTokenExpired(token))
            return false;
        var decodedToken = this.jwtHelper.decodeToken(token);
        decodedToken.claims;
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
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

module.exports = __webpack_require__(/*! D:\Kod\LMS_1_1\LMS_1_1\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map