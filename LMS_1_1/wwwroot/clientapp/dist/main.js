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

/***/ "./app/Activities/Create/add-activities-with-modul-id.component.css":
/*!**************************************************************************!*\
  !*** ./app/Activities/Create/add-activities-with-modul-id.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0FjdGl2aXRpZXMvQ3JlYXRlL2FkZC1hY3Rpdml0aWVzLXdpdGgtbW9kdWwtaWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Activities/Create/add-activities-with-modul-id.component.html":
/*!***************************************************************************!*\
  !*** ./app/Activities/Create/add-activities-with-modul-id.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create</h1>\t\r\n\r\n <h4>Activity on {{ModuleName}}</h4>\t\r\n<hr />\t\r\n<div class=\"row\">\t\r\n    <div class=\"col-md-4\">\t\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n         <form #theForm=\"ngForm\"  (ngSubmit)=\"Create(theForm)\"  novalidate>\t\r\n\r\n             <input type=\"hidden\" [(ngModel)]=\"Activity.Moduleid\" name=\"ModuleId\" />\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"name\" class=\"control-label\">Name</label>\t\r\n                <input  [(ngModel)]=\"Activity.name\" name=\"name\" id=\"name\" class=\"form-control\"   required #name=\"ngModel\"/>\r\n             </div>\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"startDate\" class=\"control-label\">Start Date</label>\t\r\n                <input  type =\"datetime-local\" [(ngModel)]=\"Activity.startDate\" name=\"startDate\"  [min]=\"Modulestartdate\"\t[max]=\"Moduleenddate\"\r\n                   id=\"startDate\" class=\"form-control\"   required #startdate=\"ngModel\" (blur)=\"gotDate()\"/>\t\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && startDate.invalid && startDate.errors.require\">Formaterror on startdate  </div>\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && startDate < Modulestartdate\">May not start before the course</div>\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && endDate && endDate.touched && startdate>endDate\">May not start before the end</div>\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"endDate\" class=\"control-label\">End Date</label>\t\r\n                <input  type =\"datetime-local\"  [(ngModel)]=\"Activity.endDate\" name=\"endDate\"  [min]=\"Modulestartdate\"\t[max]=\"Moduleenddate\"\r\n                  id=\"endDate\" class=\"form-control\"  required #enddate=\"ngModel\" (blur)=\"gotDate()\"/>\t\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && endDate.invalid\">Formaterror on startdate  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && endDate < Modulestartdate\">May not start before the course</div>\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && startDate && startDate.touched && startdate>endDate\">May not start before the end</div>\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"description\" class=\"control-label\">Description</label>\t\r\n                <textarea [(ngModel)]=\"Activity.description\" name=\"description\" class=\"form-control\" cols=\"30\" rows=\"5\" required></textarea>\r\n             </div>\r\n             <div class=\"form-group\">\r\n                <label for=\"ActitivtyType\" class=\"control-label\">Actitivty Type</label>\r\n                <select class=\"form-control\" id=\"role\" [(ngModel)]=\"Activity.activityTypeId\" name=\"ActivityTypeId\" required #activitytype=\"ngModel\" >\r\n                   <option *ngFor=\"let ActivityType of ActivityTypes\" [value]=\"ActivityType.id\">{{ActivityType.name}}</option>                                    \r\n                </select>\r\n                \r\n              </div>\r\n            <div class=\"form-group\">\t\r\n                    <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid\" />\r\n                    <a [routerLink]=\"['/courses', Courseid]\" class=\"btn btn-default\" >Go back</a>\r\n            </div>\t\r\n        </form>\t\r\n\r\n\r\n     </div>\t\r\n\r\n     <div class=\"col-md-4\">\t\r\n            <check-if-dubbs></check-if-dubbs>\r\n        </div> \r\n</div> "

/***/ }),

/***/ "./app/Activities/Create/add-activities-with-modul-id.component.ts":
/*!*************************************************************************!*\
  !*** ./app/Activities/Create/add-activities-with-modul-id.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddActivitiesWithModulIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActivitiesWithModulIdComponent", function() { return AddActivitiesWithModulIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_Courses_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/Courses/course */ "./app/Courses/course.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/app/Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _activities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../activities.service */ "./app/Activities/activities.service.ts");








var AddActivitiesWithModulIdComponent = /** @class */ (function () {
    function AddActivitiesWithModulIdComponent(db, cd, messhandler, ActivititesService) {
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
        this.ActivititesService = ActivititesService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.Activity = new ClientApp_app_Courses_course__WEBPACK_IMPORTED_MODULE_2__["Activity"]();
        this.errorMessage = "";
        this.ModuleName = "";
        this.Courseid = "";
    }
    AddActivitiesWithModulIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.SendDubbId(this.Activity.moduleid);
        this.messhandler.SendDubbType("Activity");
        this.messhandler.SendDubbStart(new Date(this.Activity.startDate + ":00.000Z"));
        this.messhandler.SendDubbEnd(new Date(this.Activity.endDate + ":00.000Z"));
        this.messhandler.Modulid
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Activity.moduleid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.Courseid
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Courseid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulStartDate
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.Modulestartdate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulEndDate
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.Moduleenddate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulName
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.ModuleName = status;
            _this.cd.markForCheck();
        });
        this.ActivititesService.getActitityTypes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (resp) {
            _this.ActivityTypes = resp;
            _this.cd.markForCheck();
        });
    };
    AddActivitiesWithModulIdComponent.prototype.gotDate = function () {
        if (this.Activity.startDate != null && this.Activity.endDate != null) {
            this.messhandler.SendDubbId(this.Activity.moduleid);
            this.messhandler.SendDubbType("Activity");
            this.messhandler.SendDubbStart(new Date(this.Activity.startDate + ":00.000Z"));
            this.messhandler.SendDubbEnd(new Date(this.Activity.endDate + ":00.000Z"));
        }
        // post data
    };
    AddActivitiesWithModulIdComponent.prototype.Create = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (new Date(this.Activity.startDate + ":00").valueOf() < this.Modulestartdate.valueOf() + 1) {
            var asd = this.Activity.startDate.valueOf();
            var msd = this.Modulestartdate.valueOf();
            this.errorMessage = this.errorMessage + "Start date on activity may not be before module start date (" + this.Modulestartdate + ")";
        }
        if (new Date(this.Activity.endDate + ":59").valueOf() < this.Modulestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on activity may not be before module start date (" + this.Modulestartdate + ")";
        }
        if (new Date(this.Activity.startDate + ":00").valueOf() > this.Moduleenddate.valueOf()) {
            this.errorMessage = this.errorMessage + "Start date on activity may not be after module end date (" + this.Moduleenddate + ")";
        }
        if (new Date(this.Activity.endDate + ":59").valueOf() > this.Moduleenddate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on activity may not be after module end date (" + this.Moduleenddate + ")";
        }
        if (this.Activity.endDate.valueOf() < this.Activity.startDate.valueOf()) {
            this.errorMessage = this.errorMessage + " A module must end after it's start";
        }
        if (this.errorMessage == "") {
            this.ActivititesService.CreateActivity(this.Activity)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.errorMessage = "Activity " + _this.Activity.name + " Activity";
                }
                _this.cd.markForCheck();
            }, function (err) { return _this.errorMessage = err; });
        }
    };
    AddActivitiesWithModulIdComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AddActivitiesWithModulIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-activities-with-modul-id',
            template: __webpack_require__(/*! ./add-activities-with-modul-id.component.html */ "./app/Activities/Create/add-activities-with-modul-id.component.html"),
            styles: [__webpack_require__(/*! ./add-activities-with-modul-id.component.css */ "./app/Activities/Create/add-activities-with-modul-id.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_5__["LoginMessageHandlerService"],
            _activities_service__WEBPACK_IMPORTED_MODULE_7__["ActivitiesService"]])
    ], AddActivitiesWithModulIdComponent);
    return AddActivitiesWithModulIdComponent;
}());

//Activity.moduleid
//ModuleName


/***/ }),

/***/ "./app/Activities/activities.module.ts":
/*!*********************************************!*\
  !*** ./app/Activities/activities.module.ts ***!
  \*********************************************/
/*! exports provided: ActivitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesModule", function() { return ActivitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Create_add_activities_with_modul_id_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Create/add-activities-with-modul-id.component */ "./app/Activities/Create/add-activities-with-modul-id.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _documents_documents_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../documents/documents.module */ "./app/documents/documents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/is-teacher.guard */ "./app/Shared/is-teacher.guard.ts");
/* harmony import */ var ClientApp_app_Modules_modules_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ClientApp/app/Modules/modules.module */ "./app/Modules/modules.module.ts");
/* harmony import */ var _Activities_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Activities/edit/edit.component */ "./app/Activities/edit/edit.component.ts");
/* harmony import */ var _activity_delete_activity_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./activity-delete/activity-delete.component */ "./app/Activities/activity-delete/activity-delete.component.ts");











var ActivitiesModule = /** @class */ (function () {
    function ActivitiesModule() {
    }
    ActivitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _Create_add_activities_with_modul_id_component__WEBPACK_IMPORTED_MODULE_3__["AddActivitiesWithModulIdComponent"],
                _Activities_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _activity_delete_activity_delete_component__WEBPACK_IMPORTED_MODULE_10__["ActivityDeleteComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _documents_documents_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsModule"],
                ClientApp_app_Modules_modules_module__WEBPACK_IMPORTED_MODULE_8__["ModulesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    {
                        path: 'Activity/create',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _Create_add_activities_with_modul_id_component__WEBPACK_IMPORTED_MODULE_3__["AddActivitiesWithModulIdComponent"]
                    },
                    {
                        path: 'Activity/edit/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _Activities_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"]
                    },
                    {
                        path: 'Activity/delete/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _activity_delete_activity_delete_component__WEBPACK_IMPORTED_MODULE_10__["ActivityDeleteComponent"]
                    }
                    /*,  {
                         path: 'Modules/delete/:id'
                         , canActivate: [IsTeacherGuard]
                         , component: ModuleDeleteComponent
                     }*/
                ])
            ]
        })
    ], ActivitiesModule);
    return ActivitiesModule;
}());



/***/ }),

/***/ "./app/Activities/activities.service.ts":
/*!**********************************************!*\
  !*** ./app/Activities/activities.service.ts ***!
  \**********************************************/
/*! exports provided: ActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return ActivitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");






var ActivitiesService = /** @class */ (function () {
    function ActivitiesService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.activityUrl = "https://localhost:44396/api/activity1";
        this.token = "";
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.AuthService.token
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (i) { return _this.token = i; });
    }
    ActivitiesService.prototype.getAuthHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
    };
    ActivitiesService.prototype.CreateActivity = function (Activity) {
        return this.http.post(this.activityUrl + "/PostActivity", Activity, {
            headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ActivitiesService.prototype.getActitityTypes = function () {
        return this.http.get(this.activityUrl + "/ActivityTypes", {
            headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ActivitiesService.prototype.EditActivity = function (id, Activity) {
        return this.http.put(this.activityUrl + "/" + id, Activity, {
            headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ActivitiesService.prototype.GetActivity = function (Activityid) {
        return this.http.get(this.activityUrl + "/" + Activityid, {
            headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    //Delete a activity by a given guid.
    ActivitiesService.prototype.DeleteActivity = function (id) {
        var urlString = this.activityUrl + "/" + id;
        return this.http.delete(urlString, {
            headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ActivitiesService.prototype.handleError = function (err) {
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ActivitiesService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ActivitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ActivitiesService);
    return ActivitiesService;
}());



/***/ }),

/***/ "./app/Activities/activity-delete/activity-delete.component.css":
/*!**********************************************************************!*\
  !*** ./app/Activities/activity-delete/activity-delete.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0FjdGl2aXRpZXMvYWN0aXZpdHktZGVsZXRlL2FjdGl2aXR5LWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/Activities/activity-delete/activity-delete.component.html":
/*!***********************************************************************!*\
  !*** ./app/Activities/activity-delete/activity-delete.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Delete activity</h1>\r\n\r\n<h3>Are you sure you want to delete this?</h3>\r\n<div>\r\n    <h4>LMSActivity</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class=\"col-sm-2\">\r\n            Activity Name\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{act_delete.name}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            Start Date\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{act_delete.startDate}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            End Date\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{act_delete.endDate}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            Description\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{act_delete.description}}\r\n        </dd>\r\n        <!--<dt class=\"col-sm-2\">\r\n            @Html.DisplayNameFor(model => model.Modules)\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            @Html.DisplayFor(model => model.Modules.Id)\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            @Html.DisplayNameFor(model => model.ActivityType)\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            @Html.DisplayFor(model => model.ActivityType.Id)\r\n        </dd>-->\r\n    </dl>\r\n\r\n    <form #myform=\"ngForm\" (ngSubmit)=\"DelActivity()\">\r\n        <input type=\"submit\" value=\"Delete\" class=\"btn btn-danger\" /> |\r\n        <a [routerLink]=\"['/courses']\">Back to List</a>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./app/Activities/activity-delete/activity-delete.component.ts":
/*!*********************************************************************!*\
  !*** ./app/Activities/activity-delete/activity-delete.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActivityDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDeleteComponent", function() { return ActivityDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _activities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../activities.service */ "./app/Activities/activities.service.ts");






var ActivityDeleteComponent = /** @class */ (function () {
    function ActivityDeleteComponent(route, actvservice, router, cd) {
        this.route = route;
        this.actvservice = actvservice;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ActivityDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.actvservice.GetActivity(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(function (tactv) {
            _this.act_delete = tactv;
            _this.cd.markForCheck();
        }, function (error) { console.log(error); });
    };
    ActivityDeleteComponent.prototype.DelActivity = function () {
        var _this = this;
        this.actvservice.DeleteActivity(this.act_delete.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(function (tact) {
            _this.cd.markForCheck();
            _this.router.navigate(['/courses']);
        });
    };
    ActivityDeleteComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ActivityDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity-delete',
            template: __webpack_require__(/*! ./activity-delete.component.html */ "./app/Activities/activity-delete/activity-delete.component.html"),
            styles: [__webpack_require__(/*! ./activity-delete.component.css */ "./app/Activities/activity-delete/activity-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _activities_service__WEBPACK_IMPORTED_MODULE_5__["ActivitiesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ActivityDeleteComponent);
    return ActivityDeleteComponent;
}());



/***/ }),

/***/ "./app/Activities/edit/edit.component.css":
/*!************************************************!*\
  !*** ./app/Activities/edit/edit.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0FjdGl2aXRpZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Activities/edit/edit.component.html":
/*!*************************************************!*\
  !*** ./app/Activities/edit/edit.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create</h1>\t\r\n\r\n <h4>Activity on {{ModuleName}}</h4>\t\r\n<hr />\t\r\n<div class=\"row\">\t\r\n    <div class=\"col-md-4\">\t\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n         <form #theForm=\"ngForm\"  (ngSubmit)=\"Register(theForm)\"  novalidate>\t\r\n\r\n             <input type=\"hidden\" [(ngModel)]=\"Activity.Moduleid\" name=\"ModuleId\" />\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"name\" class=\"control-label\">Name</label>\t\r\n                <input  [(ngModel)]=\"Activity.name\" name=\"name\" id=\"name\" class=\"form-control\"   required #name=\"ngModel\"/>\r\n             </div>\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"startDate\" class=\"control-label\">Start Date</label>\t\r\n                <input  type =\"datetime-local\" [(ngModel)]=\"Activity.startDate\" name=\"startDate\"  [min]=\"Modulestartdate\"\t[max]=\"Moduleenddate\"\r\n                   id=\"startDate\" class=\"form-control\"   required #startdate=\"ngModel\" (blur)=\"gotDate()\"/>\t\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && startDate.invalid && startDate.errors.require\">Formaterror on startdate  </div>\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && startDate < Modulestartdate\">May not start before the course</div>\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && endDate && endDate.touched && startdate>endDate\">May not start before the end</div>\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"endDate\" class=\"control-label\">End Date</label>\t\r\n                <input  type =\"datetime-local\"  [(ngModel)]=\"Activity.endDate\" name=\"endDate\"  [min]=\"Modulestartdate\"\t[max]=\"Moduleenddate\"\r\n                  id=\"endDate\" class=\"form-control\"  required #enddate=\"ngModel\" (blur)=\"gotDate()\"/>\t\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && endDate.invalid\">Formaterror on startdate  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && endDate < Modulestartdate\">May not start before the course</div>\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && startDate && startDate.touched && startdate>endDate\">May not start before the end</div>\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"description\" class=\"control-label\">Description</label>\t\r\n                <textarea [(ngModel)]=\"Activity.description\" name=\"description\" class=\"form-control\" cols=\"30\" rows=\"5\" required></textarea>\r\n             </div>\r\n             <div class=\"form-group\">\r\n                <label for=\"ActitivtyType\" class=\"control-label\">Actitivty Type</label>\r\n                <select class=\"form-control\" id=\"role\" [(ngModel)]=\"Activity.activityTypeId\" name=\"ActivityTypeId\" required #activitytype=\"ngModel\" >\r\n                   <option *ngFor=\"let ActivityType of ActivityTypes\" [value]=\"ActivityType.id\">{{ActivityType.name}}</option>                                    \r\n                </select>\r\n                \r\n              </div>\r\n            <div class=\"form-group\">\t\r\n                    <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid\" />\r\n                    <a [routerLink]=\"['/courses', Courseid]\" class=\"btn btn-default\" >Go back</a>\r\n            </div>\t\r\n        </form>\t\r\n        <div class=\"col-md-4\">\t\r\n            <check-if-dubbs></check-if-dubbs>\r\n        </div> \r\n</div> "

/***/ }),

/***/ "./app/Activities/edit/edit.component.ts":
/*!***********************************************!*\
  !*** ./app/Activities/edit/edit.component.ts ***!
  \***********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ClientApp_app_Courses_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/Courses/course */ "./app/Courses/course.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/app/Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var _activities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../activities.service */ "./app/Activities/activities.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");









var EditComponent = /** @class */ (function () {
    function EditComponent(db, cd, route, messhandler, ActivititesService) {
        this.db = db;
        this.cd = cd;
        this.route = route;
        this.messhandler = messhandler;
        this.ActivititesService = ActivititesService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.Activity = new ClientApp_app_Courses_course__WEBPACK_IMPORTED_MODULE_3__["Activity"]();
        this.errorMessage = "";
        this.ModuleName = "";
        this.Activityid = "";
        this.Courseid = "";
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Activityid = this.route.snapshot.paramMap.get("id"); // null if no hit?
        this.messhandler.Modulid
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Activity.moduleid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.Courseid
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Courseid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulStartDate
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.Modulestartdate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulEndDate
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.Moduleenddate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.ModulName
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.ModuleName = status;
            _this.cd.markForCheck();
        });
        this.ActivititesService.getActitityTypes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (resp) {
            _this.ActivityTypes = resp;
            _this.cd.markForCheck();
        });
        this.ActivititesService.GetActivity(this.Activityid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (resp) {
            _this.Activity = resp;
            _this.cd.markForCheck();
        });
    };
    EditComponent.prototype.gotDate = function () {
        if (this.Activity.startDate != null && this.Activity.endDate != null) {
            var startdatework = void 0;
            if ((this.Activity.startDate.toLocaleString().length == 16)) {
                startdatework = new Date(this.Activity.startDate + ":00.000Z");
            }
            else {
                startdatework = this.Activity.startDate;
            }
            var enddatework = void 0;
            if ((this.Activity.endDate.toLocaleString().length == 16)) {
                enddatework = new Date(this.Activity.endDate + ":59.000Z");
            }
            else {
                enddatework = this.Activity.endDate;
            }
            this.messhandler.SendDubbId(this.Activity.moduleid);
            this.messhandler.SendDubbType("Activity");
            this.messhandler.SendDubbStart(startdatework);
            this.messhandler.SendDubbEnd(enddatework);
        }
        // post data
    };
    EditComponent.prototype.Register = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (new Date(this.Activity.startDate + ":00").valueOf() < this.Modulestartdate.valueOf() + 1) {
            var asd = this.Activity.startDate.valueOf();
            var msd = this.Modulestartdate.valueOf();
            this.errorMessage = this.errorMessage + "Start date on activity may not be before module start date (" + this.Modulestartdate + ")";
        }
        if (new Date(this.Activity.endDate + ":59").valueOf() < this.Modulestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on activity may not be before module start date (" + this.Modulestartdate + ")";
        }
        if (new Date(this.Activity.startDate + ":00").valueOf() > this.Moduleenddate.valueOf()) {
            this.errorMessage = this.errorMessage + "Start date on activity may not be after module end date (" + this.Moduleenddate + ")";
        }
        if (new Date(this.Activity.endDate + ":59").valueOf() > this.Moduleenddate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on activity may not be after module end date (" + this.Moduleenddate + ")";
        }
        if (this.Activity.endDate.valueOf() < this.Activity.startDate.valueOf()) {
            this.errorMessage = this.errorMessage + " A module must end after it's start";
        }
        if (this.errorMessage == "") {
            this.ActivititesService.EditActivity(this.Activity.id, this.Activity)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
                .subscribe(function (status) {
                _this.errorMessage = "Activity updated";
                _this.cd.markForCheck();
            }, function (err) { return _this.errorMessage = err; });
        }
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./app/Activities/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./app/Activities/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_5__["LoginMessageHandlerService"],
            _activities_service__WEBPACK_IMPORTED_MODULE_6__["ActivitiesService"]])
    ], EditComponent);
    return EditComponent;
}());



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

module.exports = "<div  >\r\n  <div style=\"text-align:center\"  >\r\n       <span *ngIf=\"pageTitle\">Add/Remove students for {{pageTitle}}</span>\r\n  </div>\r\n  <div  class=\"container\">\r\n      <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        \r\n          <div>Filtera</div>\r\n        <div >\r\n            <input type='text'  [(ngModel)]='listFilter'/>\r\n        </div>\r\n        </div>\r\n          <div class=\"col-sm-6\">\r\n            &nbsp;\r\n          </div>\r\n        </div>\r\n    <div class=\"row\">\r\n        \r\n            <div class=\"col-sm-6\">\r\n  \r\n          <div class=\"table-responsive tableContainer\">\r\n            <label>Choose among these</label>\r\n\r\n\r\n\r\n            <table class=\"table scrollTable table-hover\"  cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"  >\r\n\r\n                <thead class=\"fixedHeader\">\r\n                  <tr id=\"from_ChooseFrom\">\r\n                    <th width=\"50%\">First Name</th>\r\n                    <th width=\"50%\">Last Name</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"Bodyn_ChooseFrom\" class=\"scrollContent\" >\r\n                      <tr *ngFor='let Choose of ChooseFrom'>\r\n                          <td width=\"49%\" title=\"Add\" (click)=\"chooseStudent(Choose.userid)\">{{Choose.firstName}}</td>\r\n                          <td width=\"49%\" title=\"Add\" (click)=\"chooseStudent(Choose.userid)\">{{Choose.lastName}}</td>\r\n                      </tr>\r\n\r\n                  </tbody>\r\n\r\n            </table>\r\n      \r\n          </div>\r\n        \r\n      </div>\r\n\r\n   \r\n<div class=\"col-sm-6\">\r\n  \r\n    <div class=\"table-responsive tableContainer\">\r\n        <label>Click here to unchoose</label>\r\n          <table class=\"table scrollTable table-hover\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"  >\r\n              <thead class=\"fixedHeader\">\r\n                <tr id=\"from_Choosed\">\r\n                  <th width=\"50%\">First Name</th>\r\n                  <th width=\"50%\">Last Name</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"Bodyn_Choosed\" class=\"scrollContent\">\r\n                    <tr *ngFor='let UnChoose of Choosed'>\r\n                        <td width=\"49%\" title=\"Remove\" (click)=\"unChooseStudent(UnChoose.userid)\">{{UnChoose.firstName}}</td>\r\n                        <td width=\"49%\" title=\"Remove\" (click)=\"unChooseStudent(UnChoose.userid)\">{{UnChoose.lastName}}</td>\r\n                    </tr>\r\n\r\n              </tbody>\r\n          </table>\r\n          <button  class=\"btn btn-success\" (click)=\"SaveStudents()\">Save</button>\r\n    </div>   \r\n    \r\n     \r\n    </div>\r\n    \r\n</div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");






var AddPartipantComponent = /** @class */ (function () {
    function AddPartipantComponent(route, router, PartipantService, cd) {
        this.route = route;
        this.router = router;
        this.PartipantService = PartipantService;
        this.cd = cd;
        this.pageTitle = "";
        this.BlackList = [];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
        this.PartipantService.GetStudentsOff()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (Choose) {
            _this.ChooseFrom = Choose;
            _this.cd.markForCheck();
        });
        this.PartipantService.GetStudentsOn()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (Choosed) {
            _this.Choosed = Choosed;
            _this.PartipantService.Choosed = _this.Choosed;
            _this.cd.markForCheck();
        });
        this.PartipantService.GetCourseName()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (CourseName) {
            _this.pageTitle = CourseName.value.name;
            _this.cd.markForCheck();
        });
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
        var _this = this;
        this.PartipantService.SaveStudents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.cd.markForCheck();
            _this.router.navigate(['/courses', _this.courseid]);
        });
        //;
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
    /*
       private sortfunction(a:IPartipant,b:IPartipant): -1|1|0
       {
        const FirstNameA=a.FirstName.toLocaleUpperCase();
        const LastNameA=a.LastName.toLocaleUpperCase();
        const FirstNameB=b.FirstName.toLocaleUpperCase();
        const LastNameB=b.LastName.toLocaleUpperCase();
        if(FirstNameA<FirstNameB)
          return -1
        if(FirstNameA>FirstNameB)
          return 1
        if(LastNameA<LastNameB)
          return -1
        if(LastNameA>LastNameB)
          return 1
        return 0
      }
      */
    AddPartipantComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AddPartipantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-partipant',
            template: __webpack_require__(/*! ./add-partipant.component.html */ "./app/AddPartipant/add-partipant.component.html"),
            styles: [__webpack_require__(/*! ./add-partipant.component.css */ "./app/AddPartipant/add-partipant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _partipant_service__WEBPACK_IMPORTED_MODULE_3__["PartipantService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ShowPartipantListSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.ShowPartipantList = this.ShowPartipantListSource.asObservable();
        this.AuthService.token
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(function (i) {
            _this.token = i;
        });
    }
    PartipantService.prototype.SendPartipantList = function (arg) {
        this.ShowPartipantListSource.next(arg);
    };
    PartipantService.prototype.getAuthHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
    };
    PartipantService.prototype.GetStudentsOff = function () {
        var url = "https://localhost:44396/CourseUsers/GetusersOff";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.GetCourseName = function () {
        var url = "https://localhost:44396/CourseUsers/GetCourseName";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.GetStudentsOn = function () {
        var url = "https://localhost:44396/CourseUsers/GetusersOn";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(
        /* map(
         (response:IPartipant[])=>
     {this.Choosed=response;
     }
     ),*/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.GetUsers = function () {
        var url = "https://localhost:44396/CourseUsers/GetUsers";
        return this.http.get(url, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.GetUser = function (id) {
        var url = "https://localhost:44396/CourseUsers/GetUser";
        var parmas = { "CourseId": id };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.SaveStudents = function () {
        var url = "https://localhost:44396/CourseUsers/AddStudentsToCourse";
        var Userids = [];
        for (var _i = 0, _a = this.Choosed; _i < _a.length; _i++) {
            var part = _a[_i];
            Userids.push(part.userid);
        }
        //let parmas={"CourseId":this.CourseId,Userids};    
        return this.http.post(url, { "CourseId": this.CourseId, Userids: Userids }, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /*
        public DeleteUser(id: string) {
            let url:string="https://localhost:44396/CourseUsers/DeleteUser";
            return this.http.post(url,{"UserId":id,},
            {headers: this.getAuthHeader()
        })
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError));
    
          }
        */
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
    PartipantService.prototype.GetCoursesOff = function (userid) {
        var url = "https://localhost:44396/CourseUsers/GetCoursesOff";
        var parmas = { "UserId": userid };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.GetCoursesOn = function (userid) {
        var url = "https://localhost:44396/CourseUsers/GetCoursesOn";
        var parmas = { "UserId": userid };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(
        /* map(
        (response:IPartipant[])=>
    {this.Choosed=response;
    }
    ),*/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.GetUserName = function (userid) {
        var url = "https://localhost:44396/CourseUsers/GetUserName";
        var parmas = { "UserId": userid };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    PartipantService.prototype.SaveCourses = function (userid, Choosed) {
        var url = "https://localhost:44396/CourseUsers/AddCoursesToStudent";
        var courseids = [];
        for (var _i = 0, Choosed_1 = Choosed; _i < Choosed_1.length; _i++) {
            var part = Choosed_1[_i];
            courseids.push(part.id.toString());
        }
        //let parmas={"CourseId":this.CourseId,Userids};    
        return this.http.post(url, { "UserId": userid, courseids: courseids }, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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
    PartipantService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");






var CourseDeleteComponent = /** @class */ (function () {
    function CourseDeleteComponent(route, CourseService, router, cd) {
        this.route = route;
        this.CourseService = CourseService;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    CourseDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (tcourse) {
            _this.course = tcourse;
            _this.cd.markForCheck();
        }, function (error) { _this.errorMsg = error; });
    };
    CourseDeleteComponent.prototype.ConfirmedDelete = function () {
        var _this = this;
        this.CourseService.DeleteCourse(this.course.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (c) {
            _this.cd.markForCheck();
            _this.router.navigate(['/courses']);
        });
    };
    CourseDeleteComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CourseDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-delete',
            template: __webpack_require__(/*! ./course-delete.component.html */ "./app/Courses/course-delete/course-delete.component.html"),
            styles: [__webpack_require__(/*! ./course-delete.component.css */ "./app/Courses/course-delete/course-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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

module.exports = "<div *ngIf=\"course\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\" style=\"width: 19rem;\">\r\n                <img class=\"card-img-top\" [src]=\"course.courseImgPath==null?'':course.courseImgPath\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h3 class=\"card-title\">{{course.name}}</h3>\r\n                    <h5 class=\"card-title\">{{course.startDate |date: 'yyyy-MM-dd'}}</h5>\r\n                    <p class=\"card-text\"> {{course.description}}</p>\r\n\r\n\r\n                    <a href=\"javascript:void(0);\" (click)=\"toggelPartipantList()\">{{showpartipantlistmsg}}  partipantlist</a>\r\n                    <app-partipant-list [courseid]='course.id'></app-partipant-list>\r\n\r\n                    <div class=\"card-body\" *ngIf=\"isTeacher\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <!-- <a [routerLink]=\"['/Modules/AddModuleWithCourseId', course.id]\">Add Module</a> -->\r\n                                <p>\r\n                                    <a class=\"btn btn-info\" asp-controller=\"Modules\" asp-action=\"CreateWithCourseid\" asp-route-id=\"@Model.Id\">\r\n                                        <i class=\"fa fa-1x fa-plus-square\"></i>\r\n                                    </a>\r\n                                </p>\r\n</div>\r\n                            <div class=\"col-6\">\r\n                                <a [routerLink]=\"['/AddPartipant', course.id]\">Add Participant</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n              \r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <detail_list [courseid]=\"course.id\"></detail_list>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div>\r\n                    <upload-detail [DocOwnerId]=\"course.id\"></upload-detail>\r\n                </div>\r\n                <doc-upload [DocOwnerId]=\"course.id\" [DocOwnerTypeId]=\"1\" [DocumentTypeId]=\"1\"></doc-upload>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ClientApp/app/AddPartipant/partipant.service */ "./app/AddPartipant/partipant.service.ts");
/* harmony import */ var ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ClientApp/app/Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");









var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(route, CourseService, AuthService, cd, partipantservice, messhandler) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.partipantservice = partipantservice;
        this.messhandler = messhandler;
        this.isTeacher = false;
        this.showpartipantlist = false;
        this.showpartipantlistmsg = "Show";
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        /*this.AuthService.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( i =>
          {
            this.isTeacher=i;
            this.cd.markForCheck();
          });*/
        var id = this.route.snapshot.paramMap.get('id');
        this.messhandler.SendCourseid(id);
        this.CourseService.getCourseAndModulebyId(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (course) {
            _this.course = course;
            _this.messhandler.SendCourseStartDate(course.startDate);
            _this.messhandler.SendCourseName(course.name);
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    CourseDetailComponent.prototype.toggelPartipantList = function () {
        if (this.showpartipantlist) {
            this.showpartipantlist = false;
            this.showpartipantlistmsg = "Show";
        }
        else {
            this.showpartipantlist = true;
            this.showpartipantlistmsg = "Hide";
        }
        this.partipantservice.SendPartipantList(this.showpartipantlist);
    };
    CourseDetailComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CourseDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./course-detail.component.html */ "./app/Courses/course-detail/course-detail.component.html"),
            styles: [__webpack_require__(/*! ./course-detail.component.css */ "./app/Courses/course-detail/course-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_7__["PartipantService"],
            ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_8__["LoginMessageHandlerService"]])
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

module.exports = "<h1>Edit</h1>\r\n\r\n<h4>Course</h4>\r\n<hr />\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <form #mycourse=\"ngForm\" (ngSubmit)=\"UpdateCourse()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"cname\" class=\"control-label\">Course Name</label>\r\n                    <input type=\"text\" required [(ngModel)]=\"editCourse.name\" name=\"cname\" class=\"form-control\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"startDate\" class=\"control-label\">Start Date</label>\r\n                    <input required type=\"datetime-local\" [(ngModel)]=\"editCourse.startDate\" name=\"startDate\" class=\"form-control\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"Description\" class=\"control-label\">Description</label>\r\n                    <!--<textarea [(ngModel)]=\"editCourse.description\" name=\"description\" class=\"form-control\" cols=\"30\" rows=\"5\"/>-->\r\n                    <input [(ngModel)]=\"editCourse.description\" name=\"description\" class=\"form-control\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <b>File:  </b>\r\n                    <label for=\"courseImgPath\" class=\"control-label\">{{editCourse.courseImgPath}}</label>\r\n                    <input type=\"file\" #fileInput [(ngModel)]=\"editCourse.courseImgPath\" name=\"courseImgPath\" class=\"form-control\" \r\n                           id=\"selectedFile\" style=\"display: none;\"/>\r\n                    <div style=\"padding-left:20px\"></div>\r\n                    <input type=\"button\" value=\" Select a file \" onclick=\"document.getElementById('selectedFile').click();\" class=\"btn-secondary\" />\r\n                    <!--<input type=\"file\" name=\"coursePath\" class=\"form-control\" />-->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"submit\" value=\"Save\" class=\"btn btn-primary\" />\r\n                </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <a [routerLink]=\"['/courses']\">Back to List</a>\r\n</div>\r\n\r\n"

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
        this.CourseService.getCourseById(id).subscribe(function (tcourse) {
            var tmppath = tcourse.courseImgPath.substr(tcourse.courseImgPath.lastIndexOf('\\') + 1);
            if (tmppath == null) {
                tmppath = "";
            }
            //tcourse.courseImgPath = tcourse.courseImgPath.split('\\')[3];
            _this.editCourse = tcourse;
            _this.editCourse.courseImgPath = tmppath;
        }, function (error) { _this.errorMsg = error; });
        console.log("XXXXXXXXXXXXXX=>" + this.editCourse.courseImgPath);
    };
    CourseEditComponent.prototype.UpdateCourse = function () {
        var fileToUpload = (this.fileInputVariable.nativeElement.files.length == 0) ?
            (new File([new Blob()], this.editCourse.courseImgPath)) : this.fileInputVariable.nativeElement.files[0];
        this.selectFilename = this.editCourse.courseImgPath.substr(this.editCourse.courseImgPath.lastIndexOf("\\") + 1);
        console.log("XXXXXXXXXXXXX====>" + this.editCourse.courseImgPath);
        console.log("XXXXXXXXXXXXX====>" + this.selectFilename);
        var formData = new FormData();
        formData.append('criD', this.editCourse.id.toString());
        formData.append('Name', this.editCourse.name);
        formData.append('StartDate', this.editCourse.startDate.toString());
        formData.append('Description', this.editCourse.description);
        formData.append('FileData', fileToUpload);
        this.CourseService.EditCourse(this.editCourse.id, formData).subscribe();
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

module.exports = "\r\n<div class=\"row\" style=\"margin-bottom:15px;\">\r\n    <div class=\"col-md-4\">\r\n        <a class=\"btn btn-outline-primary\" [routerLink]=\"['/courses/create']\" *ngIf=\"isTeacher\"> Create Course</a>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n    <div class=\"row\" *ngIf='courses && courses.length'>\r\n\r\n        <div class=\"col-md-4\" *ngFor='let course of courses'>\r\n\r\n            <div class=\"card\" style=\"width: 19rem;\">\r\n\r\n\r\n                <a [routerLink]=\"['/courses', course.id]\">\r\n                    <img class=\"card-img-top\" width=\"80px\" height=\"300px\"  [src]=\"course.courseImgPath==null?'':course.courseImgPath\" alt=\"Card image cap\" />\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">{{course.name}}</h3>\r\n\r\n                        <h5 class=\"card-title\">{{course.startDate |date: 'yyyy-MM-dd'}}</h5>\r\n\r\n\r\n                    </div>\r\n                </a>\r\n                <div class=\"card-body\" *ngIf=\"isTeacher\">\r\n                    <a class=\"card-link\" [routerLink]=\"['/courses/edit', course.id]\">Edit Course</a>\r\n                    <a class=\"card-link\" [routerLink]=\"['/courses/delete', course.id]\">Delete Course</a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    \r\n    </div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course.service */ "./app/Courses/course.service.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");







var CourseListComponent = /** @class */ (function () {
    // private userId: string;
    function CourseListComponent(CourseService, AuthService, cd, router) {
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.router = router;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.courses = [];
        this.isTeacher = false;
        //   this.AuthService.userid.subscribe( i => this.userId=i);
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.AuthService.isAuthenticated) {
            this.router.navigate(['/Account/Login']);
        }
        else {
            this.isTeacher = this.AuthService.isTeacher;
            /* this.AuthService.isTeacher
                .pipe(takeUntil(this.unsubscribe))
                .subscribe( i =>
                    {
                        this.isTeacher=i;
                        this.cd.markForCheck();
                    }
                );*/
            this.CourseService.getCourses()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
                .subscribe(function (courses) {
                _this.courses = courses;
                _this.cd.markForCheck();
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    CourseListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./app/Courses/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.css */ "./app/Courses/course-list/course-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.AuthService.token
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(function (i) { return _this.token = i; });
    }
    CourseService.prototype.getAuthHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
    };
    CourseService.prototype.getCourses = function () {
        return this.http.get(this.courseUrl + "/foruser", { headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getCourseById = function (id) {
        return this.http.get(this.courseUrl + "/" + id, { headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getCourseAllById = function (id) {
        return this.http.get(this.courseUrl + "/All?id=" + id, { headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getCourseAndModulebyId = function (courseid) {
        return this.http.get(this.courseUrl + "/CAndM?id=" + courseid, { headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getActivitybymodulId = function (Moduleid) {
        return this.http.get(this.courseUrl + "/AfromMid?id=" + Moduleid, { headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.getModulAndActivitybyId = function (Moduleid) {
        return this.http.get(this.courseUrl + "/MAndAfromMid?id=" + Moduleid, { headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    CourseService.prototype.createCourse = function (course) {
        return this.http.post(this.courseUrl, course, { headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Delete a course by a given guid.
    CourseService.prototype.DeleteCourse = function (id) {
        var urlString = this.courseUrl + "/" + id;
        return this.http.delete(urlString, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Edit a course with a given guid.
    CourseService.prototype.EditCourse = function (id, editCourse) {
        //console.log("COURSE FORM EDIT COURSE" + editCourse);
        var urlString = this.courseUrl + "/" + id;
        return this.http.put(urlString, editCourse, {
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
    CourseService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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

/***/ "./app/Courses/course.ts":
/*!*******************************!*\
  !*** ./app/Courses/course.ts ***!
  \*******************************/
/*! exports provided: course, Module, Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "course", function() { return course; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
var course = /** @class */ (function () {
    function course() {
    }
    return course;
}());

var Module = /** @class */ (function () {
    function Module() {
        this.name = "";
        this.description = "";
    }
    return Module;
}());

var Activity = /** @class */ (function () {
    function Activity() {
    }
    return Activity;
}());

//it is also possible to define course class that implement the Icourse interface
//when needed


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
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-font-awesome */ "../node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _documents_documents_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../documents/documents.module */ "./app/documents/documents.module.ts");

















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
                _course_delete_course_delete_component__WEBPACK_IMPORTED_MODULE_10__["CourseDeleteComponent"],
                _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_11__["CourseEditComponent"],
                _detail_list_detail_list_component__WEBPACK_IMPORTED_MODULE_9__["detailList"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_15__["AngularFontAwesomeModule"],
                _documents_documents_module__WEBPACK_IMPORTED_MODULE_16__["DocumentsModule"],
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

module.exports = ".has-error input[type=\"text\"],\r\n.has-error textarea,\r\n.has-error input[type=\"file\"] {\r\n    border-color: rgb(216, 12, 12);\r\n    color: rgb(230, 14, 14);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvQ291cnNlcy9jcmVhdGUtY291cnNlL2NyZWF0ZS1jb3Vyc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0NvdXJzZXMvY3JlYXRlLWNvdXJzZS9jcmVhdGUtY291cnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFzLWVycm9yIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uaGFzLWVycm9yIHRleHRhcmVhLFxyXG4uaGFzLWVycm9yIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxNiwgMTIsIDEyKTtcclxuICAgIGNvbG9yOiByZ2IoMjMwLCAxNCwgMTQpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/Courses/create-course/create-course.component.html":
/*!****************************************************************!*\
  !*** ./app/Courses/create-course/create-course.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"showMsg\">\r\n    <div class=\"col-xs-12\">\r\n        <p class=\"alert alert-success\">\r\n            <strong>Registration Success!</strong> \r\n\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <form [formGroup]=\"courseForm\" (ngSubmit)=\"register()\">\r\n\r\n            <div *ngIf=\"isSubmitted && formControls.name.errors\" class=\"alert alert-warning\">\r\n                <div *ngIf=\"formControls.name.errors.required\">Course name is required</div>\r\n                <div *ngIf=\"formControls.name.errors.minlength\">Course name must be more than 4 characters</div>\r\n                <div *ngIf=\"formControls.name.errors.maxlength\">Course name must be less than 25 characters</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.name.errors }\">\r\n                <label for=\"name\" class=\"control-label\">Name</label>\r\n                <input formControlName=\"name\" name=\"name\" class=\"form-control\" />\r\n\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"isSubmitted && formControls.name.errors\" class=\"alert alert-warning\">\r\n                <div *ngIf=\"formControls.name.errors.required\">Course start date is required</div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.startDate.errors }\">\r\n                <label for=\"startDate\" class=\"control-label\">StartDate</label>\r\n                <input type=\"date\" formControlName=\"startDate\"\r\n                       name=\"startDate\" class=\"form-control\" />\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"isSubmitted && formControls.description.errors\" class=\"alert alert-warning\">\r\n                <div *ngIf=\"formControls.description.errors.required\">Description is required</div>\r\n                <div *ngIf=\"formControls.description.errors.minlength\">Description must be more than 4 characters</div>\r\n                <div *ngIf=\"formControls.description.errors.maxlength\">Description must be less than 200 characters</div>\r\n            </div>\r\n            <div class=\"form-group\"[ngClass]=\"{ 'has-error': isSubmitted && formControls.description.errors }\">\r\n                <label for=\"description\" class=\"control-label\">Description</label>\r\n\r\n                <textarea formControlName=\"description\" name=\"description\" class=\"form-control\" cols=\"30\" rows=\"5\"></textarea>\r\n            </div>\r\n\r\n            <div *ngIf=\"isSubmitted && formControls.fileData.errors\" class=\"alert alert-warning\">\r\n                <div *ngIf=\"formControls.fileData.errors.required\">Image to be upload is required</div>\r\n                <div *ngIf=\"formControls.fileData.errors.isError\">File to be upload shoulde be image type</div>\r\n\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.fileData.errors }\">\r\n                <label for=\"fileData\" class=\"control-label\">File</label>\r\n                <input type=\"file\" #fileInput formControlName=\"fileData\" accept='image/*' (change)=\"preview(fileInput.files)\" name=\"fileData\" class=\"form-control\" />\r\n              \r\n               \r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" value=\"Create\" class=\"btn btn-primary\" />\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div>\r\n            <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\">\r\n        </div>\r\n\r\n    </div>\r\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mimeType_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mimeType.validator */ "./app/Courses/mimeType.validator.ts");









var CreateCourseComponent = /** @class */ (function () {
    function CreateCourseComponent(route, CourseService, router, cd) {
        this.route = route;
        this.CourseService = CourseService;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isSubmitted = false;
        this.showMsg = false;
    }
    CreateCourseComponent.prototype.ngOnInit = function () {
        this.courseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            fileData: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, Object(_mimeType_validator__WEBPACK_IMPORTED_MODULE_7__["mimeTypeValidator"])()])
        });
    };
    CreateCourseComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    Object.defineProperty(CreateCourseComponent.prototype, "formControls", {
        get: function () { return this.courseForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateCourseComponent.prototype.register = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.courseForm.invalid) {
            return;
        }
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        var formData = new FormData();
        /* let MIMEtype = fileToUpload.type.split("/")[0];
         console.log(MIMEtype);*/
        formData.append('Name', this.courseForm.value.name);
        formData.append('StartDate', this.courseForm.value.startDate);
        formData.append('Description', this.courseForm.value.description);
        formData.append('FileData', fileToUpload);
        console.log(formData);
        this.CourseService.createCourse(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (result) {
            _this.isSubmitted = false;
            _this.router.navigate(['/courses']);
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    CreateCourseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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

module.exports = "<div *ngIf=\"course && course.modules && course.modules.length>0\">\r\n    <div id=\"accordion\" >\r\n\r\n        <!--string name = Regex.Replace(@module.Name, @\"[\\W_]+\", string.Empty);-->\r\n        <div class=\"card\" *ngFor=\"let module of course.modules\">\r\n            <div class=\"card-header\" [id]=\"module.id\">\r\n                <div class=\"row\">\r\n                \r\n                    <div class=\"btn btn-link collapsed col-6\"\r\n                        [attr.data-target]=\"'#'+ module.name2\"\r\n                        [attr.aria-controls]=\"module.name2\"\r\n                        data-toggle=\"collapse\"\r\n                        [attr.aria-expanded]=\"false\"\r\n                        (click)=\"TogggelCollapse(module.id)\"\r\n                        >\r\n                        <h5 class=\"mb-0\">  \r\n                          \r\n                            {{ module.name }}\r\n                        </h5>\r\n                        \r\n                     \r\n                    </div>\r\n                    \r\n                \r\n                <div class=\"col-6 somepadding\">\r\n                        <h5 class=\"mb-0  btn btn-info\"> \r\n                        <a [routerLink]=\"['/Modules/', module.id]\"> <i class=\"fa fa-1x fa-info\"></i></a>\r\n                    </h5>\r\n                     </div>\r\n                    </div>\r\n            </div>\r\n\r\n            <div [id]=\"module.name2\" [class]=\"'collapse'+ module.isExpanded\" [attr.aria-labelledby]=\"module.id\" data-parent=\"#accordion\">\r\n                <div>\r\n\r\n                    <p>\r\n                        {{module.description}}\r\n                    </p>\r\n                    <p style=\"text-align:right\">\r\n                        <small><b> {{module.startDate |date: 'yyyy-MM-dd'}} - {{module.endDate |date: 'yyyy-MM-dd'}} </b>  </small>\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"module.activities && module.activities.length >0\">\r\n                    <h4>Activities</h4>\r\n                    <ul class=\"timeline\">\r\n\r\n                        <li *ngFor=\"let activity of module.activities\">\r\n                            <div>\r\n                                <b>\r\n                                    <a asp-controller=\"LMSActivities\" asp-action=\"Details\" [attr.asp-route-id]=\"activity.id\">\r\n                                        {{activity.name}}\r\n                                    </a>\r\n                                </b>\r\n\r\n                                <p>\r\n                                    {{activity.description}}\r\n                                    <br> {{activity.activityType}}\r\n                                </p>\r\n\r\n                                <p style=\"text-align:right\"> <small>  <b>{{activity.startDate |date: 'yyyy-MM-dd hh:mm:ss'}} </b>  </small></p>\r\n                            </div>\r\n                            <div *ngIf=\"isTeacher\">\r\n                                <a asp-controller=\"LMSActivities\" asp-action=\"Edit\" [attr.asp-route-id]=\"activity.id\" style=\"margin-left:5px\" class=\"btn btn-info\"> <i class=\"fa fa-1x fa-edit\"></i></a>&nbsp;\r\n                                <a [routerLink]=\"['/Activity/delete', activity.id]\"> <i class=\"fa fa-1x fa-minus-square\"></i></a>\r\n                               \r\n                            </div>\r\n                        </li>\r\n\r\n                    </ul>\r\n                    <div *ngIf=\"isTeacher\">\r\n                        <p class=\"btn btn-info\">  <i class=\"fa fa-1x fa-plus-square\"></i></p>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n     </div>\r\n\r\n</div>"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ClientApp/app/Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");








var detailList = /** @class */ (function () {
    function detailList(route, CourseService, AuthService, cd, messhandler) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.savesubs = new Array();
    }
    detailList.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        /*this.AuthService.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( i =>{
             this.isTeacher=i;
             this.cd.markForCheck();
        }
        );*/
        this.CourseService.getCourseAndModulebyId(this.courseid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (course) {
            _this.course = course;
            _this.cd.markForCheck();
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
            this.messhandler.SendModulid(mid);
            var mod = this.course.modules.find(function (m) { return m.id.toString() == mid; });
            this.messhandler.SendModulStartDate(mod.startDate);
            this.messhandler.SendModulEndDate(mod.endDate);
            this.messhandler.SendModulName(mod.name);
            var temp = this.CourseService.getActivitybymodulId(mid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
                .subscribe(function (activities) {
                _this.course.modules.find(function (m) { return m.id.toString() == mid; }).activities = activities;
                _this.cd.markForCheck();
            }, function (error) { return _this.errorMessage = error; });
            if (this.savesubs.find(function (t) { return t[0] == mid; })) {
                this.savesubs.find(function (t) { return t[0] == mid; })[1] = temp;
            }
            else {
                this.savesubs.push([mid, temp]);
            }
        }
    };
    detailList.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
            ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__["LoginMessageHandlerService"]])
    ], detailList);
    return detailList;
}());



/***/ }),

/***/ "./app/Courses/mimeType.validator.ts":
/*!*******************************************!*\
  !*** ./app/Courses/mimeType.validator.ts ***!
  \*******************************************/
/*! exports provided: mimeTypeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeTypeValidator", function() { return mimeTypeValidator; });
function mimeTypeValidator() {
    return function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var mimeType = control.value;
            console.log(mimeType.endsWith('jpg'));
            if (!mimeType.endsWith('jpg')) {
                return {
                    isError: true
                };
            }
        }
        return null;
    };
}


/***/ }),

/***/ "./app/Login/AddStudentToCourse/add_student_to_course.component.css":
/*!**************************************************************************!*\
  !*** ./app/Login/AddStudentToCourse/add_student_to_course.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL0FkZFN0dWRlbnRUb0NvdXJzZS9hZGRfc3R1ZGVudF90b19jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Login/AddStudentToCourse/add_student_to_course.component.html":
/*!***************************************************************************!*\
  !*** ./app/Login/AddStudentToCourse/add_student_to_course.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  *ngIf=\"!isTeacher\">\r\n<div style=\"text-align:center\"  >\r\n     <span *ngIf=\"pageTitle\">Add/Remove courses for {{pageTitle}}</span>\r\n</div>\r\n<div  class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      \r\n        <div>Filtera</div>\r\n      <div >\r\n          <input type='text'  [(ngModel)]='listFilter'/>\r\n      </div>\r\n      </div>\r\n        <div class=\"col-sm-6\">\r\n          &nbsp;\r\n        </div>\r\n      </div>\r\n  <div class=\"row\">\r\n      \r\n          <div class=\"col-sm-6\">\r\n\r\n        <div class=\"table-responsive tableContainer\">\r\n          <label>Choose among these</label>\r\n\r\n\r\n\r\n          <table class=\"table scrollTable table-hover\"  cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"  >\r\n\r\n              <thead class=\"fixedHeader\">\r\n                <tr id=\"from_ChooseFrom\">\r\n                  <th width=\"100%\">Name</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody id=\"Bodyn_ChooseFrom\" class=\"scrollContent\" >\r\n                    <tr *ngFor='let Choose of ChooseFrom'>\r\n                        <td width=\"98%\" [title]=\"'Add '+ Choose.description\" (click)=\"chooseCourse(Choose.id)\">{{Choose.name}}</td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n\r\n          </table>\r\n    \r\n        </div>\r\n      \r\n    </div>\r\n\r\n \r\n<div class=\"col-sm-6\">\r\n<div>\r\n  <div class=\"table-responsive tableContainer\">\r\n      <label>Click here to unchoose</label>\r\n        <table class=\"table scrollTable table-hover\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"  >\r\n            <thead class=\"fixedHeader\">\r\n              <tr id=\"from_Choosed\">\r\n                <th width=\"100%\">Name</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody id=\"Bodyn_Choosed\" class=\"scrollContent\">\r\n                  <tr *ngFor='let UnChoose of Choosed'>\r\n                      <td width=\"98%\" [title]=\"'Remove '+ UnChoose.description\" (click)=\"unChooseCourse(UnChoose.id)\">{{UnChoose.name}}</td>\r\n                  </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n      </div> \r\n        <button *ngIf=\"userid && userid!=' '\" class=\"btn btn-success\" (click)=\"SaveCourses()\">Save</button>\r\n        <button *ngIf=\"!CoursesChoosed && (!userid || userid==' ')\" class=\"btn btn-success\" (click)=\"ChooseCourses()\">Lock Choosed</button>\r\n        <button *ngIf=\"CoursesChoosed && (!userid || userid==' ')\" class=\"btn btn-success\" (click)=\"ChooseCourses()\">Unlock choosed</button>\r\n      </div>\r\n  \r\n   \r\n  </div>\r\n  \r\n</div>\r\n</div>"

/***/ }),

/***/ "./app/Login/AddStudentToCourse/add_student_to_course.component.ts":
/*!*************************************************************************!*\
  !*** ./app/Login/AddStudentToCourse/add_student_to_course.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddStudentToCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentToCourseComponent", function() { return AddStudentToCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/AddPartipant/partipant.service */ "./app/AddPartipant/partipant.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");







var AddStudentToCourseComponent = /** @class */ (function () {
    function AddStudentToCourseComponent(PartipantService, route, cd, messhandler) {
        this.PartipantService = PartipantService;
        this.route = route;
        this.cd = cd;
        this.messhandler = messhandler;
        this.test = "";
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.isTeacher = status;
            _this.cd.markForCheck();
        });
        this.messhandler.userid
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
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
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.unsubscribe))
                        .subscribe(function (Choose) {
                        _this.ChooseFrom = Choose;
                        _this.cd.markForCheck();
                    });
                    if (_this.SaveOn != null) {
                        _this.SaveOn.unsubscribe;
                    }
                    _this.SaveOn = _this.PartipantService.GetCoursesOn(_this.userid)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.unsubscribe))
                        .subscribe(function (Choosed) {
                        _this.Choosed = Choosed;
                        _this.cd.markForCheck();
                    });
                    if (_this.Saveusername != null) {
                        _this.Saveusername.unsubscribe();
                    }
                    _this.Saveusername = _this.PartipantService.GetUserName(_this.userid)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.unsubscribe))
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (Choose) {
            _this.ChooseFrom = Choose;
            _this.cd.markForCheck();
        });
        this.SaveOn = this.PartipantService.GetCoursesOn(this.userid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (Choosed) {
            _this.Choosed = Choosed;
            _this.cd.markForCheck();
        });
    };
    AddStudentToCourseComponent.prototype.chooseCourse = function (corseid) {
        if (!this.CoursesChoosed) {
            var keyin = this.ChooseFrom.findIndex(function (cu) { return cu.id.toString() == corseid; });
            if (keyin == -1)
                rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"];
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
                rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"];
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
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
        //this.router.navigate(['/courses', this.courseid]);
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
    AddStudentToCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add_student_to_course',
            template: __webpack_require__(/*! ./add_student_to_course.component.html */ "./app/Login/AddStudentToCourse/add_student_to_course.component.html"),
            styles: [__webpack_require__(/*! ./add_student_to_course.component.css */ "./app/Login/AddStudentToCourse/add_student_to_course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_2__["PartipantService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__["LoginMessageHandlerService"]])
    ], AddStudentToCourseComponent);
    return AddStudentToCourseComponent;
}());



/***/ }),

/***/ "./app/Login/Confirm/confirm.component.css":
/*!*************************************************!*\
  !*** ./app/Login/Confirm/confirm.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL0NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/Login/Confirm/confirm.component.html":
/*!**************************************************!*\
  !*** ./app/Login/Confirm/confirm.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-2\">\r\n  <div *ngIf=\"message\">{{message}}</div>\r\n\r\n  <div class=\"row\">\r\n      <div class=\"col-6\"> \r\n  <a [routerLink]=\"[goonurl.join(',')]\" class=\"btn btn-default\" >{{goonmess}}</a>\r\n</div><div class=\"col-6\">\r\n  <a [routerLink]=\"[gobackurl.join(',')]\"  class=\"btn btn-default\" >Go back</a>\r\n</div>\r\n</div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./app/Login/Confirm/confirm.component.ts":
/*!************************************************!*\
  !*** ./app/Login/Confirm/confirm.component.ts ***!
  \************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");






var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(route, cd, messhandler) {
        this.route = route;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.message = "";
        this.goonurl = [];
        this.goonmess = "";
        this.gobackurl = [];
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.ConfirmMessage
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (mess) {
            _this.message = mess;
            _this.cd.markForCheck();
        });
        this.messhandler.ConfirmGoOnUrl
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (mess) {
            _this.goonurl = mess;
            _this.cd.markForCheck();
        });
        this.messhandler.ConfirmGoOnMessage
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (mess) {
            _this.goonmess = mess;
            _this.cd.markForCheck();
        });
        this.messhandler.ConfirmGoBackUrl
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (mess) {
            _this.gobackurl = mess;
            _this.cd.markForCheck();
        });
    };
    ConfirmComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./app/Login/Confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./app/Login/Confirm/confirm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_4__["LoginMessageHandlerService"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./app/Login/ConfirmRegistedUser/confirm-registed-user.component.css":
/*!***************************************************************************!*\
  !*** ./app/Login/ConfirmRegistedUser/confirm-registed-user.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL0NvbmZpcm1SZWdpc3RlZFVzZXIvY29uZmlybS1yZWdpc3RlZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Login/ConfirmRegistedUser/confirm-registed-user.component.html":
/*!****************************************************************************!*\
  !*** ./app/Login/ConfirmRegistedUser/confirm-registed-user.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-2\">\r\n  <div *ngIf=\"message\">{{message}}</div>\r\n</div>\r\n  <div class=\"row\">\r\n   <div class=\"col-6\">    \r\n\r\n  <a routerLink=\"/Account/Register\" class=\"btn btn-default\" >Register another user</a>\r\n</div><div class=\"col-6\">\r\n  <a routerLink=\"/courses\" class=\"btn btn-default\" >Go back</a>\r\n</div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./app/Login/ConfirmRegistedUser/confirm-registed-user.component.ts":
/*!**************************************************************************!*\
  !*** ./app/Login/ConfirmRegistedUser/confirm-registed-user.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmRegistedUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRegistedUserComponent", function() { return ConfirmRegistedUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");






var ConfirmRegistedUserComponent = /** @class */ (function () {
    function ConfirmRegistedUserComponent(route, cd, messhandler) {
        this.route = route;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.message = "";
    }
    ConfirmRegistedUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.ConfirmMessage
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.message = status;
            _this.messhandler.CourseSaved
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.unsubscribe))
                .subscribe(function (courses) {
                if (courses && courses.length > 0) {
                    _this.message = _this.message + " On " + courses;
                }
            });
            _this.messhandler.SendUserId("");
            _this.cd.markForCheck();
        });
    };
    ConfirmRegistedUserComponent.prototype.ngOnDestroy = function () {
        this.messhandler.SendCourseSaved("");
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ConfirmRegistedUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-registed-user',
            template: __webpack_require__(/*! ./confirm-registed-user.component.html */ "./app/Login/ConfirmRegistedUser/confirm-registed-user.component.html"),
            styles: [__webpack_require__(/*! ./confirm-registed-user.component.css */ "./app/Login/ConfirmRegistedUser/confirm-registed-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["LoginMessageHandlerService"]])
    ], ConfirmRegistedUserComponent);
    return ConfirmRegistedUserComponent;
}());



/***/ }),

/***/ "./app/Login/DeleteUser/deleteuser.component.css":
/*!*******************************************************!*\
  !*** ./app/Login/DeleteUser/deleteuser.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL0RlbGV0ZVVzZXIvZGVsZXRldXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/Login/DeleteUser/deleteuser.component.html":
/*!********************************************************!*\
  !*** ./app/Login/DeleteUser/deleteuser.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Delete</h1>\r\n\r\n<h3>Are you sure you want to delete this user?</h3>\r\n\r\n    <dl class=\"row\">\r\n        <dt class=\"col-sm-2\">\r\n            Email\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{user.email}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            First name\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{user.firstName}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            Last name\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{user.lastName}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            Role\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{user.role}}\r\n        </dd>\r\n    </dl>\r\n<div col-sm-6>\r\n  <button class=\"btn btn-danger\" (click)=\"ConfirmedDelete()\">Confirm delete</button>\r\n</div>\r\n<div col-sm-6>\r\n    <a [routerLink]=\"['/Account/ManageUsers']\"  class=\"btn btn-default\" >Back to List</a>\r\n</div>\r\n"

/***/ }),

/***/ "./app/Login/DeleteUser/deleteuser.component.ts":
/*!******************************************************!*\
  !*** ./app/Login/DeleteUser/deleteuser.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteuserComponent", function() { return DeleteuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/AddPartipant/partipant.service */ "./app/AddPartipant/partipant.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");








var DeleteuserComponent = /** @class */ (function () {
    function DeleteuserComponent(route, router, db, PartipantService, cd, messagehandler) {
        this.route = route;
        this.router = router;
        this.db = db;
        this.PartipantService = PartipantService;
        this.cd = cd;
        this.messagehandler = messagehandler;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.errtext = "";
    }
    DeleteuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.PartipantService.GetUser(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (u) {
            _this.user = u[0];
            _this.cd.markForCheck();
        });
    };
    DeleteuserComponent.prototype.ConfirmedDelete = function () {
        var _this = this;
        this.db.DeleteUser(this.user.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            if (status) {
                _this.errtext = "User Deleted";
                _this.messagehandler.SendConfirm("User " + _this.user.firstName + ' ' + _this.user.lastName + " Deleted");
                _this.messagehandler.SendConfirmGoOnUrl(["/Account/Delete"]);
                _this.messagehandler.SendConfirmGoOnMessage("Delete another user?");
                _this.messagehandler.SendConfirmGoBackUrl(["/Account/ManageUsers"]);
                _this.router.navigate(['Account/Confirm']);
            }
            _this.cd.markForCheck();
        }, function (err) { return _this.errtext = err; });
    };
    DeleteuserComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DeleteuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deleteuser',
            template: __webpack_require__(/*! ./deleteuser.component.html */ "./app/Login/DeleteUser/deleteuser.component.html"),
            styles: [__webpack_require__(/*! ./deleteuser.component.css */ "./app/Login/DeleteUser/deleteuser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_3__["PartipantService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__["LoginMessageHandlerService"]])
    ], DeleteuserComponent);
    return DeleteuserComponent;
}());



/***/ }),

/***/ "./app/Login/EditUser/edituser.component.css":
/*!***************************************************!*\
  !*** ./app/Login/EditUser/edituser.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL0VkaXRVc2VyL2VkaXR1c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Login/EditUser/edituser.component.html":
/*!****************************************************!*\
  !*** ./app/Login/EditUser/edituser.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-2\">\r\n        <h4>Edit a account.</h4>\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n      <form (submit)=\"onRegister(theForm)\" #theForm=\"ngForm\" novalidate>\r\n        <input type=\"hidden\" name=\"id\"  [(ngModel)]=\"user.id\">\r\n          <div class=\"form-group\">\r\n              <label for=\"user.email\">Email</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required readonly />\r\n              <div class=\"text-danger\" *ngIf=\"user.email.touched && user.email.invalid && user.email.errors.required\" >Email is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n                <label for=\"user.firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"user.firstName.touched && user.firstName.invalid && user.firstName.errors.required\" >First Name is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n                  <label for=\"user.lastName\">Last Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\" required />\r\n                  <div class=\"text-danger\" *ngIf=\"user.lastName.touched && user.lastName.invalid && user.lastName.errors.required\" >Last Name is required!</div>\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"isTeacher\">  \r\n              <label for=\"user.role\">Role</label>\r\n              <select class=\"form-control\" id=\"role\" [(ngModel)]=\"user.role\" name=\"role\" required #role=\"ngModel\">\r\n                  <option value=\"Student\">Student</option>\r\n                  <option value=\"Teacher\">Teacher</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid || saveduser\" />\r\n              <a [routerLink]=\"['/Account/ManageUsers']\" class=\"btn btn-default\" >Back to List</a>\r\n          </div>    \r\n        </form>\r\n         <div *ngIf=\"returnmessage\">{{returnmessage}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./app/Login/EditUser/edituser.component.ts":
/*!**************************************************!*\
  !*** ./app/Login/EditUser/edituser.component.ts ***!
  \**************************************************/
/*! exports provided: EdituserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdituserComponent", function() { return EdituserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ClientApp/app/AddPartipant/partipant.service */ "./app/AddPartipant/partipant.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");








var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(db, cd, route, messhandler, router, PartipantService) {
        this.db = db;
        this.cd = cd;
        this.route = route;
        this.messhandler = messhandler;
        this.router = router;
        this.PartipantService = PartipantService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isTeacher = false;
    }
    EdituserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.db.isTeacher;
        var id = this.route.snapshot.paramMap.get("id"); // null if no hit?
        this.PartipantService.GetUser(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (u) {
            _this.user = u[0];
            _this.cd.markForCheck();
        });
    };
    EdituserComponent.prototype.onRegister = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (this.user.oldpassword == null)
            this.user.oldpassword = "";
        if (this.isTeacher) {
            this.db.UpdateUserAdmin(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.errorMessage = "Update succeded";
                }
                else {
                    _this.errorMessage = "Update failed";
                }
                _this.cd.markForCheck();
            }, function (err) { return _this.errorMessage = err; });
        }
    };
    EdituserComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    EdituserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edituser',
            template: __webpack_require__(/*! ./edituser.component.html */ "./app/Login/EditUser/edituser.component.html"),
            styles: [__webpack_require__(/*! ./edituser.component.css */ "./app/Login/EditUser/edituser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_4__["LoginMessageHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_6__["PartipantService"]])
    ], EdituserComponent);
    return EdituserComponent;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(db, router, cd, messhandler) {
        this.db = db;
        this.router = router;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (success) {
            if (success) {
                _this.messhandler.SendCurrUserAuth(_this.db.isAuthenticated);
                _this.messhandler.SendCurrUserTeacher(_this.db.isTeacher);
                _this.router.navigate(["courses"]);
            }
            _this.cd.markForCheck();
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./app/Login/Login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./app/Login/Login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__["LoginMessageHandlerService"]])
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

module.exports = "<div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\">\r\n<ul class=\"navbar-nav flex-grow-1\">\r\n      <li class=\"nav-item\" *ngIf=\"isAuthenticated\"  >\r\n          <a [routerLink]=\"['/Account/Manage']\" class=\"nav-link text-dark\">\r\n              Hello\r\n              \r\n                  <span>{{firstName}} {{lastName}}</span>\r\n              \r\n          </a>\r\n      </li>\r\n          <li class=\"nav-item\" *ngIf=\"isTeacher\">\r\n              <a [routerLink]=\"['/Account/Register']\" class=\"nav-link text-dark\">Register</a>\r\n            </li>\r\n              <li class=\"nav-item\" *ngIf=\"isTeacher\">  \r\n              <a [routerLink]=\"['/Account/ManageUsers']\" class=\"nav-link text-dark\">Manage Users</a>\r\n          </li>\r\n      \r\n      <li class=\"nav-item\" *ngIf=\"isAuthenticated\">\r\n        <a href=\"/#\" class=\"nav-link text-dark\" (click)=\"logout()\">Logout</a>\r\n\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item\" *ngIf=\"!isAuthenticated\" >\r\n        <a [routerLink]=\"['/Account/Login']\" class=\"nav-link text-dark\">Login</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");







var LoginpartialComponent = /** @class */ (function () {
    function LoginpartialComponent(AuthService, router, cd, messhandler) {
        this.AuthService = AuthService;
        this.router = router;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    LoginpartialComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.isAuthenticated=this.AuthService.isAuthenticated;
         this.isTeacher=this.AuthService.isTeacher;
     */
        this.messhandler.CurrUserAuth
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.isAuthenticated = status;
            _this.cd.markForCheck();
        });
        this.messhandler.CurrUserTeacher
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.isTeacher = status;
            _this.cd.markForCheck();
        });
        // this.AuthService.isAuthenticated.subscribe( i => this.isAuthenticated=i);
        //this.AuthService.isTeacher.subscribe(i => this.isTeacher=i);
        this.AuthService.firstName
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (fn) {
            _this.firstName = fn;
            _this.cd.markForCheck();
        });
        this.AuthService.lastName
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (ln) {
            _this.lastName = ln;
            _this.cd.markForCheck();
        });
    };
    LoginpartialComponent.prototype.logout = function () {
        this.AuthService.logout();
        this.router.navigate(['/Account/Login']);
    };
    LoginpartialComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    LoginpartialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loginpartial',
            template: __webpack_require__(/*! ./loginpartial.component.html */ "./app/Login/LoginPartial/loginpartial.component.html"),
            styles: [__webpack_require__(/*! ./loginpartial.component.css */ "./app/Login/LoginPartial/loginpartial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__["LoginMessageHandlerService"]])
    ], LoginpartialComponent);
    return LoginpartialComponent;
}());



/***/ }),

/***/ "./app/Login/Manage/manage.component.css":
/*!***********************************************!*\
  !*** ./app/Login/Manage/manage.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL01hbmFnZS9tYW5hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Login/Manage/manage.component.html":
/*!************************************************!*\
  !*** ./app/Login/Manage/manage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-2\">\r\n      <h4>Edit a account.</h4>\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    <form (submit)=\"onRegister(theForm)\" #theForm=\"ngForm\" novalidate>\r\n      <input type=\"hidden\" name=\"id\"  [(ngModel)]=\"user.id\">\r\n        <div class=\"form-group\">\r\n            <label for=\"user.email\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required readonly />\r\n            <div class=\"text-danger\" *ngIf=\"user.email.touched && user.email.invalid && user.email.errors.required\" >Email is required!</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n              <label for=\"user.firstName\">First Name</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required />\r\n              <div class=\"text-danger\" *ngIf=\"user.firstName.touched && user.firstName.invalid && user.firstName.errors.required\" >First Name is required!</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n                <label for=\"user.lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"user.lastName.touched && user.lastName.invalid && user.lastName.errors.required\" >Last Name is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user.oldpassword\">Old Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"oldpassword\" [(ngModel)]=\"user.oldpassword\" required #password=\"ngModel\" />\r\n            <div class=\"text-danger\" *ngIf=\"user.oldpassword && user.oldpassword.touched && user.oldpassword.invalid && user.oldpassword.errors.required\">Old password is required!</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"user.password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" required #password=\"ngModel\" />\r\n          <div class=\"text-danger\" *ngIf=\"user.password.touched && user.password.invalid && user.password.errors.required\">Password is required!</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"user.confirmpassword\">Confirm Password</label>\r\n          <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" [(ngModel)]=\"user.confirmpassword\" required #confirmpassword=\"ngModel\" />\r\n          <div class=\"text-danger\" *ngIf=\"user.confirmpassword.touched && user.confirmpassword.invalid && user.confirmpassword.errors.required\">Confirm Password is required!</div>\r\n          <div class=\"text-danger\" *ngIf=\"user.confirmpassword.touched && user.password.touched && user.confirmpassword!=user.password\">The password and the confirm password needs to be alike</div>\r\n      </div>\r\n        <div class=\"form-group\" *ngIf=\"isTeacher\">  \r\n            <label for=\"user.role\">Role</label>\r\n            <select class=\"form-control\" id=\"role\" [(ngModel)]=\"user.role\" name=\"role\" required #role=\"ngModel\">\r\n                <option value=\"Student\">Student</option>\r\n                <option value=\"Teacher\">Teacher</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid\" />\r\n            <a [routerLink]=\"['/courses']\" class=\"btn btn-default\" >Go back</a>\r\n        </div>    \r\n      </form>\r\n       <div *ngIf=\"returnmessage\">{{returnmessage}}</div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./app/Login/Manage/manage.component.ts":
/*!**********************************************!*\
  !*** ./app/Login/Manage/manage.component.ts ***!
  \**********************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Register_registeruser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Register/registeruser */ "./app/Login/Register/registeruser.ts");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ClientApp/app/AddPartipant/partipant.service */ "./app/AddPartipant/partipant.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");









var ManageComponent = /** @class */ (function () {
    function ManageComponent(db, cd, route, messhandler, router, PartipantService) {
        this.db = db;
        this.cd = cd;
        this.route = route;
        this.messhandler = messhandler;
        this.router = router;
        this.PartipantService = PartipantService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.user = new _Register_registeruser__WEBPACK_IMPORTED_MODULE_3__["RegisterUser"]();
        this.isTeacher = false;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PartipantService.GetUser(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe))
            .subscribe(function (u) {
            _this.user = u[0];
            _this.cd.markForCheck();
        });
    };
    ManageComponent.prototype.onRegister = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (this.user.password != this.user.confirmpassword) {
            this.errorMessage = "Passwords doesn't match";
        }
        else {
            if (this.user.oldpassword == null)
                this.user.oldpassword = "";
            this.db.UpdateUser(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.errorMessage = "Update succeded";
                }
                else {
                    _this.errorMessage = "Update failed";
                }
                _this.cd.markForCheck();
            });
        }
    };
    ManageComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.component.html */ "./app/Login/Manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./app/Login/Manage/manage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__["LoginMessageHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_7__["PartipantService"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./app/Login/ManageUsers/manageusers.component.css":
/*!*********************************************************!*\
  !*** ./app/Login/ManageUsers/manageusers.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0xvZ2luL01hbmFnZVVzZXJzL21hbmFnZXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Login/ManageUsers/manageusers.component.html":
/*!**********************************************************!*\
  !*** ./app/Login/ManageUsers/manageusers.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6 offset-md-1\">\r\n        <div class=\"tableContainer\">\r\n            <label>Manage users</label>\r\n            <table class=\"table  table-hover w-auto\"  cellpadding=\"0\" cellspacing=\"0\"   >\r\n\r\n                <thead >\r\n                  <tr>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th style=\"min-width: 5em\">Role</th>\r\n                    <th style=\"min-width: 7em\"></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody  >\r\n                      <tr *ngFor='let user of users'>\r\n                          <td class=\"myTbBox\">{{user.firstName}}</td>\r\n                          <td class=\"myTbBox\">{{user.lastName}}</td>\r\n                          <td style=\"min-width: 5em\" >{{user.role}}</td>\r\n                          <td style=\"min-width: 7em\" class=\"myTbBox\"  >\r\n                              <a [routerLink]=\"['/Account/Edit', user.id]\"> <i title=\"Edit\" class=\"fa fa-2x fa-edit\"></i></a>&nbsp;  \r\n                              <a [routerLink]=\"['/Account/Delete', user.id]\"><i title=\"Delete\" class=\"fa fa-2x fa-trash\"></i></a>&nbsp; \r\n                              <a href=\"javascript:void(0);\" (click)=\"ChooseUser(user.id)\"><i title=\"Choose\" class=\"fa fa-2x fa-check\"></i></a>\r\n                          </td>\r\n                      </tr>\r\n                  </tbody>  \r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"offset-md-1 col-md-4\">\r\n        <add_student_to_course></add_student_to_course>\r\n    </div>\r\n\r\n</div> \r\n<div class=\"row\">\r\n    \r\n    <a [routerLink]=\"['/courses']\" class=\"btn btn-default\" *ngIf=\"!saveduser\">Cancel</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./app/Login/ManageUsers/manageusers.component.ts":
/*!********************************************************!*\
  !*** ./app/Login/ManageUsers/manageusers.component.ts ***!
  \********************************************************/
/*! exports provided: ManageusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageusersComponent", function() { return ManageusersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/AddPartipant/partipant.service */ "./app/AddPartipant/partipant.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");







var ManageusersComponent = /** @class */ (function () {
    function ManageusersComponent(PartipantService, route, cd, messhandler) {
        this.PartipantService = PartipantService;
        this.route = route;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.togglechoose = false;
        this.lastuserid = "";
        this.users = [];
    }
    ManageusersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.SendIsteacher(true);
        this.PartipantService.GetUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.users = status;
            _this.cd.markForCheck();
        });
    };
    ManageusersComponent.prototype.ChooseUser = function (id) {
        if (this.users.find(function (u) { return u.id == id; }).role != "Teacher") {
            if (this.togglechoose && this.lastuserid == id) {
                this.togglechoose = false;
                this.messhandler.SendIsteacher(true);
            }
            else {
                this.togglechoose = true;
                this.lastuserid = id;
                this.messhandler.SendIsteacher(false);
                this.messhandler.SendUserId(id);
            }
        }
        else {
            this.togglechoose = false;
            this.messhandler.SendIsteacher(true);
        }
    };
    ManageusersComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ManageusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manageusers',
            template: __webpack_require__(/*! ./manageusers.component.html */ "./app/Login/ManageUsers/manageusers.component.html"),
            styles: [__webpack_require__(/*! ./manageusers.component.css */ "./app/Login/ManageUsers/manageusers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_3__["PartipantService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_5__["LoginMessageHandlerService"]])
    ], ManageusersComponent);
    return ManageusersComponent;
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

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-2\">\r\n        <h4 *ngIf=\"!saveduser\">Create a new account.</h4>\r\n        <h4 *ngIf=\"saveduser\">Created a new account.</h4>\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n      <form (submit)=\"onRegister(theForm)\" #theForm=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n              <label for=\"user.email\">Email</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required />\r\n              <div class=\"text-danger\" *ngIf=\"email.touched && email.invalid && email.errors.required\" >Email is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n                <label for=\"user.firstName\">First Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"firstName.touched && firstName.invalid && firstName.errors.required\" >First Name is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n                  <label for=\"user.lastName\">Last Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\" required />\r\n                  <div class=\"text-danger\" *ngIf=\"lastName.touched && lastName.invalid && lastName.errors.required\" >Last Name is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"user.password\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" required #password=\"ngModel\"  />\r\n              <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required!</div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"user.confirmpassword\">Confirm Password</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" [(ngModel)]=\"user.confirmpassword\" required  #confirmpassword=\"ngModel\" />\r\n              <div class=\"text-danger\" *ngIf=\"confirmpassword.touched && confirmpassword.invalid && confirmpassword.errors.required\">Confirm Password is required and need to be the same as password</div>\r\n             <!-- <div class=\"text-danger\" *ngIf=\"confirmpassword.touched && password.touched && (confirmpassword===password)\">The password and the confirm password needs to be alike</div>-->\r\n          </div>\r\n          <div class=\"form-group\">  \r\n              <label for=\"user.role\">Role</label>\r\n              <select class=\"form-control\" id=\"role\" [(ngModel)]=\"user.role\" name=\"role\" required #role=\"ngModel\" (change)=\"OnToggleRole()\">\r\n                  <option value=\"Student\" selected>Student</option>\r\n                  <option value=\"Teacher\">Teacher</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid || saveduser\" />\r\n              <a [routerLink]=\"['/courses']\" class=\"btn btn-default\" *ngIf=\"!saveduser\">Cancel</a>\r\n          </div>    \r\n        </form>\r\n         <div *ngIf=\"returnmessage\">{{returnmessage}}</div>\r\n  </div>\r\n  <div class=\"offset-md-1 col-md-4\">\r\n      <add_student_to_course></add_student_to_course>\r\n  </div>\r\n</div>"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login-message-handler.service */ "./app/Login/login-message-handler.service.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(db, cd, messhandler, router) {
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
        this.router = router;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.user = new _registeruser__WEBPACK_IMPORTED_MODULE_2__["RegisterUser"]();
        // private theForm: FormGroup;
        this.HasChoosedCourse = false;
        this.returnmessage = null;
        this.saveduser = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.SendUserId("");
        this.messhandler.SendIsteacher(false);
        this.messhandler.HasChoosedCourses
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.HasChoosedCourse = status;
            _this.cd.markForCheck();
        });
        this.messhandler.HasSavedCoures
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            if (status) {
                if (_this.saveduser) {
                    _this.messhandler.SendConfirm(_this.returnmessage);
                    _this.router.navigate(['/Account/ConfirmRegistedUser']);
                }
            }
            _this.cd.markForCheck();
        });
    };
    RegisterComponent.prototype.OnToggleRole = function () {
        if (this.user.role == "Student") {
            this.messhandler.SendIsteacher(false);
        }
        else {
            this.messhandler.SendIsteacher(true);
        }
    };
    RegisterComponent.prototype.onRegister = function (TheForm) {
        var _this = this;
        this.errorMessage = "";
        if (this.user.password != this.user.confirmpassword) {
            this.errorMessage = "Passwords doesn't match";
        }
        else {
            this.db.register(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
                .subscribe(function (success) {
                _this.saveduser = true;
                TheForm.form.disable();
                _this.cd.markForCheck();
                var msg = "Created " + _this.user.firstName + " " + _this.user.lastName + " with the role " + _this.user.role;
                if (_this.user.role == "Student") {
                    // om student medella add
                    _this.messhandler.SendUserId(success.value.name);
                    _this.returnmessage = msg;
                }
                else {
                    _this.messhandler.SendConfirm(msg);
                    _this.router.navigate(['/Account/ConfirmRegistedUser']);
                }
                return true;
            }, function (err) { return _this.errorMessage = err; });
        }
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./app/Login/Register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./app/Login/Register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__["LoginMessageHandlerService"],
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
        this.id = null;
        this.oldpassword = "";
    }
    return RegisterUser;
}());



/***/ }),

/***/ "./app/Login/login-message-handler.service.ts":
/*!****************************************************!*\
  !*** ./app/Login/login-message-handler.service.ts ***!
  \****************************************************/
/*! exports provided: LoginMessageHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMessageHandlerService", function() { return LoginMessageHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");



var LoginMessageHandlerService = /** @class */ (function () {
    function LoginMessageHandlerService() {
        this.startstring = "";
        // To add And make choose to save
        this.useridSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.startstring);
        this.userid = this.useridSource.asObservable();
        // to 
        this.HasChoosedCoursesSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.HasChoosedCourses = this.HasChoosedCoursesSource.asObservable();
        this.IsteacherSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.Isteacher = this.IsteacherSource.asObservable();
        this.HasSavedCouresSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.HasSavedCoures = this.HasSavedCouresSource.asObservable();
        this.CourseSavedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.startstring);
        this.CourseSaved = this.CourseSavedSource.asObservable();
        this.ConfirmSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.startstring);
        this.ConfirmMessage = this.ConfirmSource.asObservable();
        this.CurrUserAuthSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.CurrUserAuth = this.CurrUserAuthSource.asObservable();
        this.CurrUserTeacherSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.CurrUserTeacher = this.CurrUserTeacherSource.asObservable();
        this.ConfirmGoOnUrlSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.ConfirmGoOnUrl = this.ConfirmGoOnUrlSource.asObservable();
        this.ConfirmGoOnMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.startstring);
        this.ConfirmGoOnMessage = this.ConfirmGoOnMessageSource.asObservable();
        this.ConfirmGoBackUrlSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.ConfirmGoBackUrl = this.ConfirmGoBackUrlSource.asObservable();
        this.CourseStartDateSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.CourseStartDate = this.CourseStartDateSource.asObservable();
        this.CourseidSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.Courseid = this.CourseidSource.asObservable();
        this.DubbTypeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.DubbType = this.DubbTypeSource.asObservable();
        this.DubbIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.DubbId = this.DubbIdSource.asObservable();
        this.DubbStartSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.DubbStart = this.DubbStartSource.asObservable();
        this.DubbEndSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.DubbEnd = this.DubbEndSource.asObservable();
        this.ModulidSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.Modulid = this.ModulidSource.asObservable();
        this.ModulStartDateSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.ModulStartDate = this.ModulStartDateSource.asObservable();
        this.ModulEndDateSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.ModulEndDate = this.ModulEndDateSource.asObservable();
        this.ModulNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.ModulName = this.ModulNameSource.asObservable();
        this.CourseNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.CourseName = this.CourseNameSource.asObservable();
    }
    LoginMessageHandlerService.prototype.SendUserId = function (userid) {
        this.useridSource.next(userid == null ? '' : userid);
        return true;
    };
    LoginMessageHandlerService.prototype.SendHasChoosedCourses = function (status) {
        this.HasChoosedCoursesSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendIsteacher = function (status) {
        this.IsteacherSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendHasSavedCoures = function (status) {
        this.HasSavedCouresSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendConfirm = function (arg) {
        this.ConfirmSource.next(arg == null ? '' : arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCourseSaved = function (arg) {
        this.CourseSavedSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCourseStartDate = function (arg) {
        this.CourseStartDateSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCourseid = function (arg) {
        this.CourseidSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCurrUserAuth = function (status) {
        this.CurrUserAuthSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCurrUserTeacher = function (status) {
        this.CurrUserTeacherSource.next(status == null ? false : status);
        return true;
    };
    LoginMessageHandlerService.prototype.SendConfirmGoOnUrl = function (arg) {
        this.ConfirmGoOnUrlSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendConfirmGoOnMessage = function (arg) {
        this.ConfirmGoOnMessageSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendConfirmGoBackUrl = function (arg) {
        this.ConfirmGoBackUrlSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendDubbType = function (arg) {
        this.DubbTypeSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendDubbId = function (arg) {
        this.DubbIdSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendDubbStart = function (arg) {
        this.DubbStartSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendDubbEnd = function (arg) {
        this.DubbEndSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendModulid = function (arg) {
        this.ModulidSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendModulStartDate = function (arg) {
        this.ModulStartDateSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendModulEndDate = function (arg) {
        this.ModulEndDateSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendModulName = function (arg) {
        this.ModulNameSource.next(arg);
        return true;
    };
    LoginMessageHandlerService.prototype.SendCourseName = function (arg) {
        this.CourseNameSource.next(arg);
        return true;
    };
    LoginMessageHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginMessageHandlerService);
    return LoginMessageHandlerService;
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
/* harmony import */ var _AddStudentToCourse_add_student_to_course_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddStudentToCourse/add_student_to_course.component */ "./app/Login/AddStudentToCourse/add_student_to_course.component.ts");
/* harmony import */ var _ConfirmRegistedUser_confirm_registed_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ConfirmRegistedUser/confirm-registed-user.component */ "./app/Login/ConfirmRegistedUser/confirm-registed-user.component.ts");
/* harmony import */ var _ManageUsers_manageusers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ManageUsers/manageusers.component */ "./app/Login/ManageUsers/manageusers.component.ts");
/* harmony import */ var _Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Shared/is-authenticated.guard */ "./app/Shared/is-authenticated.guard.ts");
/* harmony import */ var _EditUser_edituser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditUser/edituser.component */ "./app/Login/EditUser/edituser.component.ts");
/* harmony import */ var _DeleteUser_deleteuser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DeleteUser/deleteuser.component */ "./app/Login/DeleteUser/deleteuser.component.ts");
/* harmony import */ var _Confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Confirm/confirm.component */ "./app/Login/Confirm/confirm.component.ts");
/* harmony import */ var _Manage_manage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Manage/manage.component */ "./app/Login/Manage/manage.component.ts");

















var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_Login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _LoginPartial_loginpartial_component__WEBPACK_IMPORTED_MODULE_6__["LoginpartialComponent"],
                _Register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _AddStudentToCourse_add_student_to_course_component__WEBPACK_IMPORTED_MODULE_9__["AddStudentToCourseComponent"],
                _ConfirmRegistedUser_confirm_registed_user_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmRegistedUserComponent"],
                _Login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _ManageUsers_manageusers_component__WEBPACK_IMPORTED_MODULE_11__["ManageusersComponent"],
                _EditUser_edituser_component__WEBPACK_IMPORTED_MODULE_13__["EdituserComponent"],
                _DeleteUser_deleteuser_component__WEBPACK_IMPORTED_MODULE_14__["DeleteuserComponent"],
                _Confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"],
                _Manage_manage_component__WEBPACK_IMPORTED_MODULE_16__["ManageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
                        path: 'Account/Login',
                        component: _Login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
                    },
                    {
                        path: 'Account/Register',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _Register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
                    },
                    {
                        path: 'Account/ConfirmRegistedUser',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _ConfirmRegistedUser_confirm_registed_user_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmRegistedUserComponent"]
                    },
                    {
                        path: 'Account/ManageUsers',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _ManageUsers_manageusers_component__WEBPACK_IMPORTED_MODULE_11__["ManageusersComponent"]
                    },
                    {
                        path: 'Account/Confirm',
                        canActivate: [_Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_12__["IsAuthenticatedGuard"]],
                        component: _Confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"]
                    },
                    {
                        path: 'Account/Delete/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _DeleteUser_deleteuser_component__WEBPACK_IMPORTED_MODULE_14__["DeleteuserComponent"]
                    },
                    {
                        path: 'Account/Edit/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["IsTeacherGuard"]],
                        component: _EditUser_edituser_component__WEBPACK_IMPORTED_MODULE_13__["EdituserComponent"]
                    },
                    {
                        path: 'Account/Manage',
                        canActivate: [_Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_12__["IsAuthenticatedGuard"]],
                        component: _Manage_manage_component__WEBPACK_IMPORTED_MODULE_16__["ManageComponent"]
                    }
                ])
            ],
            exports: [_LoginPartial_loginpartial_component__WEBPACK_IMPORTED_MODULE_6__["LoginpartialComponent"],
                _Login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ]
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

module.exports = "<div *ngIf=\"module && module.activities && module.activities.length>0\">\r\n  <div id=\"accordion\" >\r\n\r\n      <!--string name = Regex.Replace(@module.Name, @\"[\\W_]+\", string.Empty);-->\r\n      <div class=\"card\" *ngFor=\"let activity of module.activities\">\r\n          <div class=\"card-header\" [id]=\"module.id\">\r\n\r\n              <div class=\"btn btn-link collapsed\"\r\n                   [attr.data-target]=\"'#'+ activity.name2\"\r\n                   [attr.aria-controls]=\"activity.name2\"\r\n                   data-toggle=\"collapse\"\r\n                   [attr.aria-expanded]=\"false\"\r\n                   (click)=\"TogggelCollapse(activity.id)\">\r\n                  <h5 class=\"mb-0\">\r\n                      {{ activity.name }}\r\n                  </h5>\r\n              </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n\r\n              <div class=\"col-md-12\">\r\n\r\n             \r\n              <div [id]=\"activity.name2\" [class]=\"'collapse'+ activity.isExpanded\" [attr.aria-labelledby]=\"activity.id\" data-parent=\"#accordion\">\r\n                  <div  *ngIf=\"module.activities && module.activities.length >0\" >\r\n\r\n                  <!--<span class=\"float-right\"> {{activity.startDate |date: 'yyyy-MM-dd HH:mm'}} -{{activity.endDate |date: 'yyyy-MM-dd HH:mm'}}</span>\r\n            <p>{{activity.description}}\r\n            <br>{{activity.activityType}}</p>-->\r\n                      <div>\r\n                          <upload-detail [DocOwnerId]=\"activity.id\"></upload-detail>\r\n                      </div>\r\n                      <div *ngIf=\"isTeacher\">\r\n                          <doc-upload [DocOwnerId]=\"activity.id\" [DocOwnerTypeId]=\"3\" [DocumentTypeId]=\"2\"></doc-upload>\r\n                      </div>\r\n\r\n                  </div>\r\n\r\n              </div>\r\n               </div>\r\n          </div>\r\n      </div>\r\n\r\n</div>\r\n</div>"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ClientApp_app_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ClientApp/app/data.service */ "./app/data.service.ts");








var ActitityListComponent = /** @class */ (function () {
    function ActitityListComponent(route, CourseService, AuthService, cd, data) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.data = data;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isTeacher = false;
    }
    ActitityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        //this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);
        //getModulAndActivitybyId(Moduleid: string) : Observable<IModule>
        this.CourseService.getModulAndActivitybyId(this.moduleid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (module) {
            _this.module = module;
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    ActitityListComponent.prototype.TogggelCollapse = function (aid) {
        if (this.module.activities.find(function (a) { return a.id.toString() == aid; }).isExpanded == " show") {
            this.module.activities.find(function (a) { return a.id.toString() == aid; }).isExpanded = "";
            this.data.getData(aid);
        }
        else {
            this.module.activities.find(function (a) { return a.id.toString() == aid; }).isExpanded = " show";
        }
    };
    ActitityListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ActitityListComponent.prototype, "moduleid", void 0);
    ActitityListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: "activity_list",
            template: __webpack_require__(/*! ./actitity_list.component.html */ "./app/Modules/Activity_list/actitity_list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ClientApp_app_Courses_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"],
            ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"],
            ClientApp_app_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], ActitityListComponent);
    return ActitityListComponent;
}());



/***/ }),

/***/ "./app/Modules/Check-if-dubbs/DubbParas.ts":
/*!*************************************************!*\
  !*** ./app/Modules/Check-if-dubbs/DubbParas.ts ***!
  \*************************************************/
/*! exports provided: DubbParas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DubbParas", function() { return DubbParas; });
;
var DubbParas = /** @class */ (function () {
    function DubbParas() {
        this.dubbtype = "";
        this.dubbid = "";
        this.dubbstart = null;
        this.dubbend = null;
    }
    return DubbParas;
}());

;


/***/ }),

/***/ "./app/Modules/Check-if-dubbs/check-if-dubbs.component.css":
/*!*****************************************************************!*\
  !*** ./app/Modules/Check-if-dubbs/check-if-dubbs.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL01vZHVsZXMvQ2hlY2staWYtZHViYnMvY2hlY2staWYtZHViYnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/Modules/Check-if-dubbs/check-if-dubbs.component.html":
/*!******************************************************************!*\
  !*** ./app/Modules/Check-if-dubbs/check-if-dubbs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div *ngIf=\"Warning\" class=\"alert-warning\">{{ Warning }}</div>\r\n\r\n"

/***/ }),

/***/ "./app/Modules/Check-if-dubbs/check-if-dubbs.component.ts":
/*!****************************************************************!*\
  !*** ./app/Modules/Check-if-dubbs/check-if-dubbs.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckIfDubbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIfDubbsComponent", function() { return CheckIfDubbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module.service */ "./app/Modules/module.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _DubbParas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DubbParas */ "./app/Modules/Check-if-dubbs/DubbParas.ts");







var CheckIfDubbsComponent = /** @class */ (function () {
    function CheckIfDubbsComponent(messhandler, ModuleService, cd) {
        this.messhandler = messhandler;
        this.ModuleService = ModuleService;
        this.cd = cd;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.paras = new _DubbParas__WEBPACK_IMPORTED_MODULE_6__["DubbParas"]();
        this.Warning = "";
    }
    CheckIfDubbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.DubbType
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.paras.dubbtype = status;
            _this.testandrun();
            _this.cd.markForCheck();
        });
        this.messhandler.DubbId
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.paras.dubbid = status;
            _this.testandrun();
            _this.cd.markForCheck();
        });
        this.messhandler.DubbStart
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.paras.dubbstart = status;
            _this.testandrun();
            _this.cd.markForCheck();
        });
        this.messhandler.DubbEnd
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.paras.dubbend = status;
            _this.testandrun();
            _this.cd.markForCheck();
        });
    };
    CheckIfDubbsComponent.prototype.testandrun = function () {
        var _this = this;
        if (this.paras.dubbtype != "" && this.paras.dubbid != "" && this.paras.dubbstart != null && this.paras.dubbend != null) {
            this.ModuleService.CheckIfDubblett(this.paras)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.Warning = "There exists allready " + _this.paras.dubbtype + " in the selected range";
                }
                else {
                    _this.Warning = "";
                }
                _this.cd.markForCheck();
            });
        }
    };
    CheckIfDubbsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    CheckIfDubbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'check-if-dubbs',
            template: __webpack_require__(/*! ./check-if-dubbs.component.html */ "./app/Modules/Check-if-dubbs/check-if-dubbs.component.html"),
            styles: [__webpack_require__(/*! ./check-if-dubbs.component.css */ "./app/Modules/Check-if-dubbs/check-if-dubbs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["LoginMessageHandlerService"],
            _module_service__WEBPACK_IMPORTED_MODULE_4__["ModuleService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CheckIfDubbsComponent);
    return CheckIfDubbsComponent;
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

module.exports = "<h1>Create</h1>\t\r\n\r\n <h4>Module on {{courseName}}</h4>\t\r\n<hr />\t\r\n<div class=\"row\">\t\r\n    <div class=\"col-md-4\">\t\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n         <form #theForm=\"ngForm\"  (ngSubmit)=\"Create(theForm)\"  novalidate>\t\r\n\r\n             <input type=\"hidden\" [(ngModel)]=\"Module.courseid\" name=\"CourseId\" />\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"name\" class=\"control-label\">Name</label>\t\r\n                <input  [(ngModel)]=\"Module.name\" name=\"name\" id=\"name\" class=\"form-control\"   required #name=\"ngModel\"/>\r\n             </div>\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"startDate\" class=\"control-label\">Start Date</label>\t\r\n                <input  type =\"datetime-local\" [(ngModel)]=\"Module.startDate\" name=\"startDate\"  [min]=\"coursestartdate\"\t\r\n                   id=\"startDate\" class=\"form-control\"   required #startdate=\"ngModel\" (blur)=\"gotDate()\"/>\t\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && startDate.invalid && startDate.errors.require\">Formaterror on startdate  </div>\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && startDate < coursestartdate\">May not start before the course</div>\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && endDate && endDate.touched && startdate>endDate\">May not start before the end</div>\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"endDate\" class=\"control-label\">End Date</label>\t\r\n                <input  type =\"datetime-local\"  [(ngModel)]=\"Module.endDate\" name=\"endDate\"  [min]=\"coursestartdate\"\t\r\n                  id=\"endDate\" class=\"form-control\"  required #enddate=\"ngModel\" (blur)=\"gotDate()\"/>\t\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && endDate.invalid\">Formaterror on startdate  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && endDate < coursestartdate\">May not start before the course</div>\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && startDate && startDate.touched && startdate>endDate\">May not start before the end</div>\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"description\" class=\"control-label\">Description</label>\t\r\n                <textarea [(ngModel)]=\"Module.description\" name=\"description\" class=\"form-control\" cols=\"30\" rows=\"5\" required></textarea>\r\n            \r\n\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                    <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid\" />\r\n                    <a [routerLink]=\"['/courses', Module.courseid]\" class=\"btn btn-default\" >Go back</a>\r\n            </div>\t\r\n        </form>\t\r\n\r\n\r\n     </div>\t\r\n\r\n     <div class=\"col-md-4\">\t\r\n            <check-if-dubbs></check-if-dubbs>\r\n        </div> \r\n</div> "

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
/* harmony import */ var _Courses_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Courses/course */ "./app/Courses/course.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ClientApp/app/Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../module.service */ "./app/Modules/module.service.ts");









var AddModuleWithCourseIdComponent = /** @class */ (function () {
    function AddModuleWithCourseIdComponent(route, db, cd, messhandler
    // ,private CourseService: CourseService
    , ModuleService
    //  ,  private router: Router
    ) {
        this.route = route;
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
        this.ModuleService = ModuleService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // get course set up coursestatdate
        this.Module = new _Courses_course__WEBPACK_IMPORTED_MODULE_2__["Module"]();
        this.CourseId = "";
        this.errorMessage = "";
        this.CourseName = "";
    }
    AddModuleWithCourseIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messhandler.Courseid
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Module.courseid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.CourseStartDate
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.coursestartdate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.CourseName
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.CourseName = status;
            _this.cd.markForCheck();
        });
    };
    AddModuleWithCourseIdComponent.prototype.gotDate = function () {
        if (this.Module.startDate != null && this.Module.endDate != null) {
            this.messhandler.SendDubbId(this.Module.courseid);
            this.messhandler.SendDubbType("Module");
            this.messhandler.SendDubbStart(new Date(this.Module.startDate + ":00.000Z"));
            this.messhandler.SendDubbEnd(new Date(this.Module.endDate + ":00.000Z"));
        }
        // post data
    };
    AddModuleWithCourseIdComponent.prototype.Create = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (this.Module.startDate.valueOf() < this.coursestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "Start date on module may not be before course start date (" + this.coursestartdate + ")";
        }
        if (this.Module.endDate.valueOf() < this.coursestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on module may not be before course start date (" + this.coursestartdate + ")";
        }
        if (this.Module.endDate.valueOf() < this.Module.startDate.valueOf()) {
            this.errorMessage = this.errorMessage + " A module must end after it's start";
        }
        if (this.errorMessage == "") {
            this.ModuleService.CreateModule(this.Module)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
                .subscribe(function (status) {
                if (status) {
                    _this.errorMessage = "Module " + _this.Module.name + " saved";
                }
                _this.cd.markForCheck();
            }, function (err) { return _this.errorMessage = err; });
        }
    };
    AddModuleWithCourseIdComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AddModuleWithCourseIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-module-with-course-id',
            template: __webpack_require__(/*! ./add-module-with-course-id.component.html */ "./app/Modules/Create/add-module-with-course-id.component.html"),
            styles: [__webpack_require__(/*! ./add-module-with-course-id.component.css */ "./app/Modules/Create/add-module-with-course-id.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__["LoginMessageHandlerService"]
            // ,private CourseService: CourseService
            ,
            _module_service__WEBPACK_IMPORTED_MODULE_8__["ModuleService"]
            //  ,  private router: Router
        ])
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

module.exports = "<div *ngIf=\"module\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\" style=\"width: 19rem;\">\r\n                <div class=\"card-body\">\r\n                    <h3 class=\"card-title\">{{module.name}}</h3>\r\n                    <h5 class=\"card-title\">{{module.startDate |date: 'yyyy-MM-dd'}} - {{module.endDate |date: 'yyyy-MM-dd'}}</h5>\r\n                    <p class=\"card-text\"> {{module.description}}</p>\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\" *ngIf=\"isTeacher\">\r\n                        <div class=\"col-6\">\r\n                             <a [routerLink]=\"['/Modules/edit', module.id]\">Edit module</a> \r\n                           <!-- <a asp-controller=\"Modules\" asp-action=\"CreateWithCourseid\" asp-route-id=\"@Model.Id\" class=\"card-link\">Edit module</a>-->\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a [routerLink]=\"['/Modules/Delete', module.id]\">Delete module</a> -\r\n                            Delete module\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <!-- <a [routerLink]=\"['/Activites/AddActivityWithModuleId', .id]\">Activity/a> -->\r\n                                <a [routerLink]=\"['/Activity/create']\">Add module</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a [routerLink]=\"['/courses/', module.courseId]\">Go back</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <activity_list [moduleid]=\"module.id\"></activity_list>\r\n        </div>\r\n       \r\n\r\n        <div class=\"col-md-4\">\r\n            <div>\r\n                <upload-detail [DocOwnerId]=\"module.id\"></upload-detail>\r\n            </div>\r\n            <doc-upload [DocOwnerId]=\"module.id\" [DocOwnerTypeId]=\"2\" [DocumentTypeId]=\"3\"></doc-upload>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    </div>\r\n  "

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ClientApp/app/Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");








var ModulDetailsComponent = /** @class */ (function () {
    function ModulDetailsComponent(route, CourseService, AuthService, cd, messhandler) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.messhandler = messhandler;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ModulDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        /* this.AuthService.isTeacher
         .pipe(takeUntil(this.unsubscribe))
         .subscribe( i => this.isTeacher=i);
         */
        var Modulid = this.route.snapshot.paramMap.get('id');
        this.CourseService.getModulAndActivitybyId(Modulid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (modul) {
            _this.module = modul;
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    ModulDetailsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ModulDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./app/Modules/Details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./app/Modules/Details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ClientApp_app_Courses_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__["LoginMessageHandlerService"]])
    ], ModulDetailsComponent);
    return ModulDetailsComponent;
}());



/***/ }),

/***/ "./app/Modules/edit/edit.component.css":
/*!*********************************************!*\
  !*** ./app/Modules/edit/edit.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL01vZHVsZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Modules/edit/edit.component.html":
/*!**********************************************!*\
  !*** ./app/Modules/edit/edit.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Edit</h1>\t\r\n\r\n <h4>Module on {{courseName}}</h4>\t\r\n<hr />\t\r\n<div class=\"row\">\t\r\n    <div class=\"col-md-4\">\t\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n         <form #theForm=\"ngForm\"  (ngSubmit)=\"Register(theForm)\"  novalidate>\t\r\n\r\n             <input type=\"hidden\" [(ngModel)]=\"Module.courseid\" name=\"CourseId\" />\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"name\" class=\"control-label\">Name</label>\t\r\n                <input  [(ngModel)]=\"Module.name\" name=\"name\" id=\"name\" class=\"form-control\"   required #name=\"ngModel\"/>\r\n             </div>\t\r\n\r\n             <div class=\"form-group\">\t\r\n                <label for=\"startDate\" class=\"control-label\">Start Date</label>\t\r\n                <input  type =\"datetime-local\" [(ngModel)]=\"Module.startDate\" name=\"startDate\"  [min]=\"coursestartdate\"\t\r\n                   id=\"startDate\" class=\"form-control\"   required #startdate=\"ngModel\" (blur)=\"gotDate()\"/>\t\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && startDate.invalid && startDate.errors.require\">Formaterror on startdate  </div>\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && startDate < coursestartdate\">May not start before the course</div>\r\n                <div class=\"text-danger\" *ngIf=\"startDate && startDate.touched && endDate && endDate.touched && startdate>endDate\">May not start before the end</div>\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"endDate\" class=\"control-label\">End Date</label>\t\r\n                <input  type =\"datetime-local\"  [(ngModel)]=\"Module.endDate\" name=\"endDate\"  [min]=\"coursestartdate\"\t\r\n                  id=\"endDate\" class=\"form-control\"  required #enddate=\"ngModel\" (blur)=\"gotDate()\"/>\t\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && endDate.invalid\">Formaterror on startdate  </div>\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && endDate < coursestartdate\">May not start before the course</div>\r\n                  <div class=\"text-danger\" *ngIf=\"endDate && endDate.touched && startDate && startDate.touched && startdate>endDate\">May not start before the end</div>\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                <label for=\"description\" class=\"control-label\">Description</label>\t\r\n                <textarea [(ngModel)]=\"Module.description\" name=\"description\" class=\"form-control\" cols=\"30\" rows=\"5\" required></textarea>\r\n            \r\n\r\n             </div>\t\r\n            <div class=\"form-group\">\t\r\n                    <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" [disabled]=\"theForm.invalid\" />\r\n                    <a [routerLink]=\"['/Modules', Module.id]\" class=\"btn btn-default\" >Go back</a>\r\n            </div>\t\r\n        </form>\t\r\n\r\n\r\n     </div>\t\r\n\r\n     <div class=\"col-md-4\">\t\r\n            <check-if-dubbs></check-if-dubbs>\r\n        </div> \r\n</div> "

/***/ }),

/***/ "./app/Modules/edit/edit.component.ts":
/*!********************************************!*\
  !*** ./app/Modules/edit/edit.component.ts ***!
  \********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ClientApp_app_Courses_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/Courses/course */ "./app/Courses/course.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ClientApp/app/Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module.service */ "./app/Modules/module.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");









var EditComponent = /** @class */ (function () {
    function EditComponent(route, db, cd, messhandler
    // ,private CourseService: CourseService
    , ModuleService) {
        this.route = route;
        this.db = db;
        this.cd = cd;
        this.messhandler = messhandler;
        this.ModuleService = ModuleService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // get course set up coursestatdate
        this.Module = new ClientApp_app_Courses_course__WEBPACK_IMPORTED_MODULE_3__["Module"]();
        this.CourseId = "";
        this.errorMessage = "";
        this.CourseName = "";
        this.Moduleid = "";
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Moduleid = this.route.snapshot.paramMap.get("id"); // null if no hit?
        this.messhandler.Courseid
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            // let tmpguid= Guid.parse(status); 
            _this.Module.courseid = status;
            _this.cd.markForCheck();
        });
        this.messhandler.CourseStartDate
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.coursestartdate = status;
            _this.cd.markForCheck();
        });
        this.messhandler.CourseName
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.CourseName = status;
            _this.cd.markForCheck();
        });
        this.ModuleService.GetModule(this.Moduleid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe))
            .subscribe(function (resp) {
            _this.Module = resp;
            _this.cd.markForCheck();
        });
    };
    EditComponent.prototype.gotDate = function () {
        if (this.Module.startDate != null && this.Module.endDate != null) {
            this.messhandler.SendDubbId(this.Module.courseid);
            this.messhandler.SendDubbType("Module");
            this.messhandler.SendDubbStart(new Date(this.Module.startDate + ":00.000Z"));
            this.messhandler.SendDubbEnd(new Date(this.Module.endDate + ":00.000Z"));
        }
        // post data
    };
    EditComponent.prototype.Register = function (theForm) {
        var _this = this;
        this.errorMessage = "";
        if (this.Module.startDate.valueOf() < this.coursestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "Start date on module may not be before course start date (" + this.coursestartdate + ")";
        }
        if (this.Module.endDate.valueOf() < this.coursestartdate.valueOf()) {
            this.errorMessage = this.errorMessage + "End date on module may not be before course start date (" + this.coursestartdate + ")";
        }
        if (this.Module.endDate.valueOf() < this.Module.startDate.valueOf()) {
            this.errorMessage = this.errorMessage + " A module must end after it's start";
        }
        if (this.errorMessage == "") {
            this.ModuleService.EditCreateModule(this.Module.id, this.Module)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe))
                .subscribe(function (status) {
                _this.errorMessage = "Module updated";
                _this.cd.markForCheck();
            }, function (err) { return _this.errorMessage = err; });
        }
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./app/Modules/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./app/Modules/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ClientApp_app_Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_6__["LoginMessageHandlerService"]
            // ,private CourseService: CourseService
            ,
            _module_service__WEBPACK_IMPORTED_MODULE_7__["ModuleService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./app/Modules/module-delete/module-delete.component.css":
/*!***************************************************************!*\
  !*** ./app/Modules/module-delete/module-delete.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL01vZHVsZXMvbW9kdWxlLWRlbGV0ZS9tb2R1bGUtZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/Modules/module-delete/module-delete.component.html":
/*!****************************************************************!*\
  !*** ./app/Modules/module-delete/module-delete.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Delete module</h1>\r\n\r\n<h3>Are you sure you want to delete this?</h3>\r\n<div>\r\n    <h4>Module</h4>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class=\"col-sm-2\">\r\n            Name\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{module_delete.name}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            StartDate\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{module_delete.startDate}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            EndDate\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{module_delete.endDate}}\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            Description\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            {{module_delete.description}}\r\n        </dd>\r\n    </dl>\r\n\r\n    <form #myform=\"ngForm\" (ngSubmit)=\"ConfirmedDelete()\">\r\n        <input type=\"submit\" value=\"Delete\" class=\"btn btn-danger\" /> |\r\n        <a [routerLink]=\"['/courses']\">Back to List</a>\r\n    </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./app/Modules/module-delete/module-delete.component.ts":
/*!**************************************************************!*\
  !*** ./app/Modules/module-delete/module-delete.component.ts ***!
  \**************************************************************/
/*! exports provided: ModuleDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleDeleteComponent", function() { return ModuleDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module.service */ "./app/Modules/module.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ClientApp_app_Courses_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/Courses/course.service */ "./app/Courses/course.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");







var ModuleDeleteComponent = /** @class */ (function () {
    function ModuleDeleteComponent(route, courseService, moduleService, router, cd) {
        this.route = route;
        this.courseService = courseService;
        this.moduleService = moduleService;
        this.router = router;
        this.cd = cd;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ModuleDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.courseService.getModulAndActivitybyId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (tmodule) {
            _this.module_delete = tmodule;
            _this.cd.markForCheck();
        }, function (error) { console.log(error); });
    };
    ModuleDeleteComponent.prototype.ConfirmedDelete = function () {
        var _this = this;
        this.moduleService.DeleteModule(this.module_delete.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe))
            .subscribe(function (s) {
            _this.cd.markForCheck();
            _this.router.navigate(['/courses']); //Todo
        });
    };
    ModuleDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-module-delete',
            template: __webpack_require__(/*! ./module-delete.component.html */ "./app/Modules/module-delete/module-delete.component.html"),
            styles: [__webpack_require__(/*! ./module-delete.component.css */ "./app/Modules/module-delete/module-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ClientApp_app_Courses_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"],
            _module_service__WEBPACK_IMPORTED_MODULE_2__["ModuleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ModuleDeleteComponent);
    return ModuleDeleteComponent;
}());



/***/ }),

/***/ "./app/Modules/module.service.ts":
/*!***************************************!*\
  !*** ./app/Modules/module.service.ts ***!
  \***************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");






var ModuleService = /** @class */ (function () {
    function ModuleService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.moduleUrl = "https://localhost:44396/api/module1";
        this.token = "";
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.AuthService.token
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (i) { return _this.token = i; });
    }
    ModuleService.prototype.getAuthHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
    };
    ModuleService.prototype.CheckIfDubblett = function (paras) {
        return this.http.post(this.moduleUrl + "/TestIfInRange", paras, {
            headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ModuleService.prototype.CreateModule = function (Module) {
        return this.http.post(this.moduleUrl + "/PostModule", Module, {
            headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ModuleService.prototype.EditCreateModule = function (id, Module) {
        return this.http.put(this.moduleUrl + "/" + id, Module, {
            headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ModuleService.prototype.GetModule = function (Moduleid) {
        return this.http.get(this.moduleUrl + "/" + Moduleid, { headers: this.getAuthHeader()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ModuleService.prototype.handleError = function (err) {
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    //Delete a module by a given guid.
    ModuleService.prototype.DeleteModule = function (id) {
        var urlString = this.moduleUrl + "/" + id;
        return this.http.delete(urlString, {
            headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ModuleService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ModuleService);
    return ModuleService;
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
/* harmony import */ var _documents_documents_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../documents/documents.module */ "./app/documents/documents.module.ts");
/* harmony import */ var _module_delete_module_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module-delete/module-delete.component */ "./app/Modules/module-delete/module-delete.component.ts");
/* harmony import */ var _Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Shared/is-teacher.guard */ "./app/Shared/is-teacher.guard.ts");
/* harmony import */ var _Check_if_dubbs_check_if_dubbs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Check-if-dubbs/check-if-dubbs.component */ "./app/Modules/Check-if-dubbs/check-if-dubbs.component.ts");
/* harmony import */ var _Modules_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Modules/edit/edit.component */ "./app/Modules/edit/edit.component.ts");














var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _Create_add_module_with_course_id_component__WEBPACK_IMPORTED_MODULE_3__["AddModuleWithCourseIdComponent"],
                _Activity_list_actitity_list_component__WEBPACK_IMPORTED_MODULE_6__["ActitityListComponent"],
                _Details_details_component__WEBPACK_IMPORTED_MODULE_8__["ModulDetailsComponent"],
                _module_delete_module_delete_component__WEBPACK_IMPORTED_MODULE_10__["ModuleDeleteComponent"],
                _Check_if_dubbs_check_if_dubbs_component__WEBPACK_IMPORTED_MODULE_12__["CheckIfDubbsComponent"],
                _Modules_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__["EditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _documents_documents_module__WEBPACK_IMPORTED_MODULE_9__["DocumentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: 'Modules/create',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_11__["IsTeacherGuard"]],
                        component: _Create_add_module_with_course_id_component__WEBPACK_IMPORTED_MODULE_3__["AddModuleWithCourseIdComponent"]
                    },
                    {
                        path: 'Modules/:id',
                        canActivate: [_Shared_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_7__["IsAuthenticatedGuard"]],
                        component: _Details_details_component__WEBPACK_IMPORTED_MODULE_8__["ModulDetailsComponent"]
                    },
                    {
                        path: 'Modules/edit/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_11__["IsTeacherGuard"]],
                        component: _Modules_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__["EditComponent"]
                    },
                    {
                        path: 'Modules/delete/:id',
                        canActivate: [_Shared_is_teacher_guard__WEBPACK_IMPORTED_MODULE_11__["IsTeacherGuard"]],
                        component: _module_delete_module_delete_component__WEBPACK_IMPORTED_MODULE_10__["ModuleDeleteComponent"]
                    }
                ])
            ],
            exports: [
                _Check_if_dubbs_check_if_dubbs_component__WEBPACK_IMPORTED_MODULE_12__["CheckIfDubbsComponent"]
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

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n      <div class=\"container\">\r\n          <a class=\"navbar-brand\">LMS(Learning Management System)</a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"navbarSupportedContent\"\r\n                  aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n          <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\">\r\n                <ul class=\"navbar-nav flex-grow-1\">\r\n            \r\n              \r\n                  <li class=\"nav-item\">\r\n                      <a href=\"/courses\" class=\"nav-link text-dark\" >Courses</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link text-dark\">Privacy</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n                  <loginpartial></loginpartial>\r\n              \r\n          \r\n      </div>\r\n  </nav>\r\n</header>"

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

module.exports = "<div *ngIf=\"show && users && users.length>0\">\r\n  <ul  *ngFor=\"let user of users\">\r\n    <li>{{user.firstName}} {{user.lastName}}</li>\r\n  </ul>\r\n</div>\r\n\r\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");






var PartipantListComponent = /** @class */ (function () {
    function PartipantListComponent(route, PartipantService, cd) {
        this.route = route;
        this.PartipantService = PartipantService;
        this.cd = cd;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.courseid = "";
    }
    PartipantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PartipantService.ShowPartipantList
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (status) {
            _this.show = status;
            _this.cd.markForCheck();
        });
        this.PartipantService.CourseId = this.courseid;
        this.PartipantService.GetStudentsOn()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (user) {
            _this.users = user;
            _this.cd.markForCheck();
        });
    };
    PartipantListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _AddPartipant_partipant_service__WEBPACK_IMPORTED_MODULE_3__["PartipantService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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
        if (!(this.auth.isAuthenticated)) {
            this.router.navigate(['/Account/Login']);
            return false;
        }
        return true;
    };
    IsAuthenticatedGuard.prototype.canActivate = function () {
        //  this.auth.isTeacher.subscribe((i:Boolean) => {return i});
        if (!(this.auth.isAuthenticated)) {
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");





var IsTeacherGuard = /** @class */ (function () {
    function IsTeacherGuard(auth, router) {
        this.auth = auth;
        this.router = router;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isTeacher = false;
        this.CheckTeacher();
    }
    IsTeacherGuard.prototype.canLoad = function (route, segments) {
        return this.auth.isTeacher;
    };
    IsTeacherGuard.prototype.CheckTeacher = function () {
        /*this.auth.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((i:boolean) =>
        {
          this.isTeacher=i;
          if(!i)
          {
            this.router.navigate(['/Account/Login']);
           
          }
        });*/
        this.isTeacher = this.auth.isTeacher;
    };
    IsTeacherGuard.prototype.canActivate = function () {
        return this.auth.isTeacher;
    };
    IsTeacherGuard.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    IsTeacherGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _AddPartipant_add_partipant_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddPartipant/add-partipant.module */ "./app/AddPartipant/add-partipant.module.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "../node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Courses_courses_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Courses/courses.module */ "./app/Courses/courses.module.ts");
/* harmony import */ var _Navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navbar/navbar.module */ "./app/Navbar/navbar.module.ts");
/* harmony import */ var _Login_login_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Login/login.module */ "./app/Login/login.module.ts");
/* harmony import */ var _Modules_modules_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Modules/modules.module */ "./app/Modules/modules.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-font-awesome */ "../node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _Courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Courses/course-list/course-list.component */ "./app/Courses/course-list/course-list.component.ts");
/* harmony import */ var _Activities_activities_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Activities/activities.module */ "./app/Activities/activities.module.ts");








//import { NoRouteModule } from './NoRoute/no-route.module';
//import { NoRouteComponent } from './NoRoute/no-route.component';








//import { LoginpartialComponent } from './Login/LoginPartial/loginpartial.component';
function tokenGetter() {
    return localStorage.getItem('id_token');
}
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
                _Courses_courses_module__WEBPACK_IMPORTED_MODULE_9__["CoursesModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '', component: _Courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_14__["CourseListComponent"]
                    },
                    {
                        path: '**', component: _Courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_14__["CourseListComponent"]
                    }
                ], {
                    enableTracing: false // for debug
                }),
                // NoRouteModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost'],
                        blacklistedRoutes: []
                    }
                }),
                _Navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__["NavbarModule"],
                _Login_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"],
                _Modules_modules_module__WEBPACK_IMPORTED_MODULE_12__["ModulesModule"],
                _Activities_activities_module__WEBPACK_IMPORTED_MODULE_15__["ActivitiesModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"]
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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "../node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _tokenData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokenData */ "./app/auth/tokenData.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Login/login-message-handler.service */ "./app/Login/login-message-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");









var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper, MessageHandler, router) {
        var _this = this;
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.MessageHandler = MessageHandler;
        this.router = router;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        // ...public jwtHelper: JwtHelperService,
        this.tokenData = new _tokenData__WEBPACK_IMPORTED_MODULE_5__["tokenData"]();
        this.tokenSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
        this.token = this.tokenSource.asObservable();
        this.tokenExpirationSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](new Date());
        this.tokenExpiration = this.tokenExpirationSource.asObservable();
        this.firstNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
        this.firstName = this.firstNameSource.asObservable();
        this.lastNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
        this.lastName = this.lastNameSource.asObservable();
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
        this.Realtoken = "";
        /*this.isAuthenticated
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( i => {
          this.RealisAuthenticated=i;
      //    this.cd.markForCheck();
        });
        this.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(i => {
            this.RealisTeacher=i;
         //   this.cd.markForCheck();
        });*/
        this.token
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(function (i) {
            _this.Realtoken = i;
            //    this.cd.markForCheck();
        });
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        /*
        private useridSource = new BehaviorSubject(' ');
        userid = this.useridSource.asObservable();
        */
        /*private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
        private _isAuthenticated = this.isAuthenticatedSource.asObservable();*/
        get: function () {
            if (this.tokenData == null || this.tokenData.token == null || this.tokenData.token.length == 0) {
                this.tokenData.token = localStorage.getItem('id_token');
                if (this.tokenData.token != null) {
                    var Data = this.jwtHelper.decodeToken(this.tokenData.token);
                    this.tokenData.tokenExpiration = new Date(localStorage.getItem("expires_at"));
                    this.tokenData.isTeacher = Data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                    this.tokenData.firstName = Data.given_name;
                    this.tokenData.lastName = Data.family_name;
                    this.tokenSource.next(this.tokenData.token == null ? '' : this.tokenData.token);
                    this.tokenExpirationSource.next(this.tokenData.tokenExpiration);
                    this.firstNameSource.next(this.tokenData.firstName);
                    this.lastNameSource.next(this.tokenData.lastName);
                    this.MessageHandler.SendCurrUserAuth(this.checkisAuthenticated(this.tokenData.token, this.tokenData.tokenExpiration));
                    this.MessageHandler.SendCurrUserTeacher(this.checkisAuthenticated(this.tokenData.token, this.tokenData.tokenExpiration) ? this.checkIsTeacher(this.tokenData.isTeacher) : false);
                }
            }
            /*
             AspNet.Identity.SecurityStamp: "Q5IWQMMVDLDJLI3VRCHWFOFLC2NKVVSC"
            aud: "users"
            exp: 1553012705
            family_name: "Norberg"
            given_name: "Penny"
            http://schemas.microsoft.com/ws/2008/06/identity/claims/role: "Teacher"
            http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name: "Penny@lysator.liu.se"
            http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier: "e6e7ef33-179a-4fd0-90ec-f63bc9168482"
            iss: "https://localhost:44396"
            jti: "4d02d28c-57d5-4464-b8e5-9eb2875471f7"
            sub: "Penny@lysator.liu.se"
            unique_name: "Penny@lysator.liu.se"
            */
            return this.checkisAuthenticated(this.tokenData.token, this.tokenData.tokenExpiration);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isTeacher", {
        /*private isTeacherSource = new BehaviorSubject<boolean>(false);
        private _isTeacher = this.isTeacherSource.asObservable();*/
        get: function () {
            return this.checkisAuthenticated(this.tokenData.token, this.tokenData.tokenExpiration) ? this.checkIsTeacher(this.tokenData.isTeacher) : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getAuthHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Authorization": "Bearer " + this.Realtoken });
    };
    AuthService.prototype.getToken = function () {
        return this.Realtoken;
    };
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post(this.url + "/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var tokenInfo = response;
            _this.tokenSource.next(tokenInfo.token == null ? '' : tokenInfo.token);
            _this.tokenExpirationSource.next(tokenInfo.expiration);
            _this.firstNameSource.next(tokenInfo.firstName);
            _this.lastNameSource.next(tokenInfo.lastName);
            localStorage.setItem('id_token', tokenInfo.token);
            localStorage.setItem("expires_at", tokenInfo.expiration);
            //    this.useridSource.next(tokenInfo.userid);
            // this.isAuthenticatedSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration));
            //  this.isTeacherSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration)?this.checkIsTeacher(tokenInfo.isTeacher):false)
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
    /*   public IsAuthenticated(): boolean
       {
         return this.RealisAuthenticated;
       }
  
       public IsTeacher(): boolean
       {
         return this.RealisTeacher;
       }
  */
    AuthService.prototype.logout = function () {
        this.tokenData = new _tokenData__WEBPACK_IMPORTED_MODULE_5__["tokenData"]();
        this.tokenSource.next('');
        this.tokenExpirationSource.next(this.tokenData.tokenExpiration);
        this.firstNameSource.next('');
        this.lastNameSource.next('');
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        //  this.isAuthenticatedSource.next(false);
        //  this.isTeacherSource.next(false)
    };
    AuthService.prototype.register = function (registeruser) {
        return this.http.post(this.url + "/account/RegisterNewUser", registeruser, { headers: this.getAuthHeader() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    AuthService.prototype.DeleteUser = function (id) {
        var url = "https://localhost:44396/account/DeleteUser";
        var parmas = { "CourseId": id };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.UpdateUser = function (user) {
        var url = "https://localhost:44396/account/UpdateUser";
        return this.http.post(url, user, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.UpdateUserAdmin = function (user) {
        var url = "https://localhost:44396/account/UpdateUserAdmin";
        return this.http.post(url, user, { headers: this.getAuthHeader()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.checkisAuthenticated = function (token, tokenExpiration) {
        var res = !(token.length == 0 || tokenExpiration < new Date());
        if (!res && token.length > 0) {
            this.logout();
            this.router.navigate(['/Account/Login']);
        }
        // Add time to expiration
        // this.tokenData.tokenExpiration= new Date(Date.now().valueOf()+30*60*1000);
        //localStorage.setItem("expires_at",this.tokenData.tokenExpiration.toISOString());
        // need also change in backend/ token somehow..
        return res;
    };
    AuthService.prototype.checkIsTeacher = function (isTeacher) {
        if (isTeacher == "Teacher")
            return true;
        return false;
    };
    AuthService.prototype.handleError = function (err) {
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(errorMessage);
    };
    AuthService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"], _Login_login_message_handler_service__WEBPACK_IMPORTED_MODULE_7__["LoginMessageHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
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

/***/ "./app/data.service.ts":
/*!*****************************!*\
  !*** ./app/data.service.ts ***!
  \*****************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.activityData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.share = this.activityData.asObservable();
    }
    DataService.prototype.getData = function (type) {
        this.activityData.next(type);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/documents/document.service.ts":
/*!*******************************************!*\
  !*** ./app/documents/document.service.ts ***!
  \*******************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./app/auth/auth.service.ts");






var DocumentService = /** @class */ (function () {
    function DocumentService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.token = "";
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.documentUrl = "https://localhost:44396/api/documents1/";
        this.AuthService.token
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe(function (i) { return _this.token = i; });
    }
    DocumentService.prototype.isUploaded = function (message) {
        this.subject.next({ message: message });
    };
    DocumentService.prototype.getUplaodtStatus = function () {
        return this.subject.asObservable();
    };
    DocumentService.prototype.getAuthHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
    };
    DocumentService.prototype.getAuthHeader2 = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': 'text/html, application/xhtml+xml, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": "Bearer " + this.token
            }),
            responseType: 'blob'
        };
    };
    DocumentService.prototype.getDocumentsByOwnerId = function (id) {
        console.log(this.documentUrl);
        return this.http.get(this.documentUrl + "ByOwner?id=" + id, { headers: this.getAuthHeader() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DocumentService.prototype.uploadDocument = function (document) {
        return this.http.post(this.documentUrl, document, { headers: this.getAuthHeader() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return JSON.stringify(result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DocumentService.prototype.downloadFile = function (filePath) {
        var input = filePath;
        return this.http.post(this.documentUrl + "DownloadFile?fileName=" + input, {}, this.getAuthHeader2()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DocumentService.prototype.deleteFileById = function (id) {
        return this.http.delete(this.documentUrl + id, { headers: this.getAuthHeader() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DocumentService.prototype.handleError = function (err) {
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    DocumentService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./app/documents/documents.module.ts":
/*!*******************************************!*\
  !*** ./app/documents/documents.module.ts ***!
  \*******************************************/
/*! exports provided: DocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsModule", function() { return DocumentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "./app/documents/upload/upload.component.ts");
/* harmony import */ var _upload_detail_upload_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-detail/upload-detail.component */ "./app/documents/upload-detail/upload-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");






var DocumentsModule = /** @class */ (function () {
    function DocumentsModule() {
    }
    DocumentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"],
                _upload_detail_upload_detail_component__WEBPACK_IMPORTED_MODULE_4__["UploadDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            exports: [
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"],
                _upload_detail_upload_detail_component__WEBPACK_IMPORTED_MODULE_4__["UploadDetailComponent"]
            ]
        })
    ], DocumentsModule);
    return DocumentsModule;
}());



/***/ }),

/***/ "./app/documents/upload-detail/upload-detail.component.css":
/*!*****************************************************************!*\
  !*** ./app/documents/upload-detail/upload-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.holder{}\r\ndiv.holder div.card:nth-child(2n+1) {\r\n    background-color: rgb(235, 235, 224);\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZG9jdW1lbnRzL3VwbG9hZC1kZXRhaWwvdXBsb2FkLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2RvY3VtZW50cy91cGxvYWQtZGV0YWlsL3VwbG9hZC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmhvbGRlcnt9XHJcbmRpdi5ob2xkZXIgZGl2LmNhcmQ6bnRoLWNoaWxkKDJuKzEpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjI0KTtcclxufSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./app/documents/upload-detail/upload-detail.component.html":
/*!******************************************************************!*\
  !*** ./app/documents/upload-detail/upload-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\" *ngIf='documents && documents.length'>\r\n    <div class=\"col-md-12\">\r\n      \r\n        <div class=\"card\">\r\n            <h5 class=\"card-header\">Documents</h5>\r\n           \r\n\r\n            <div class=\"holder\">\r\n                <div class=\"card\" style=\"margin-top: 10px;\" *ngFor='let document of documents'>\r\n\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">{{document.name}}</h5>\r\n                \r\n                            {{document.description}}\r\n\r\n                        \r\n                        <p style=\"text-align:right\"><small><b>Upload date:</b> {{document.uploadDate|date:'yyyy-mm-dd'}} </small></p>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n                    <div class=\"card-footer text-muted\">\r\n\r\n                        <p *ngIf=\"isTeacher\" class=\"card-title btn btn-info\" style=\"margin-right:5px\" (click)=\"DeleteFile(document.id)\"><i class=\"fa fa-1x fa-trash\"></i></p>\r\n                        <p class=\"card-title btn btn-info\" style=\"margin-right:5px\"  (click)=\"DownLoadFile(document.path)\"><i class=\"fa fa-1x  fa-download\"></i></p>\r\n                      <!--  <p class=\"card-title btn btn-info\" style=\"margin-right:5px\"><i class=\"fa fa-1x fa-paperclip\"></i></p>-->\r\n\r\n                    </div>\r\n                </div>\r\n          \r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./app/documents/upload-detail/upload-detail.component.ts":
/*!****************************************************************!*\
  !*** ./app/documents/upload-detail/upload-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: UploadDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDetailComponent", function() { return UploadDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../document.service */ "./app/documents/document.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");
/* harmony import */ var ClientApp_app_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ClientApp/app/data.service */ "./app/data.service.ts");







var UploadDetailComponent = /** @class */ (function () {
    function UploadDetailComponent(route, DocumentService, AuthService, data) {
        var _this = this;
        this.route = route;
        this.DocumentService = DocumentService;
        this.AuthService = AuthService;
        this.data = data;
        this.documents = [];
        this.isTeacher = false;
        this.subscription = this.DocumentService.getUplaodtStatus().subscribe(function (status) {
            if (status) {
                _this.loadDocument();
            }
        });
    }
    UploadDetailComponent.prototype.ngOnInit = function () {
        this.isTeacher = this.AuthService.isTeacher;
        this.loadDocument();
    };
    UploadDetailComponent.prototype.loadDocument = function () {
        var _this = this;
        this.DocumentService.getDocumentsByOwnerId(this.DocOwnerId).subscribe(function (documents) {
            _this.documents = documents;
        }, function (error) { return _this.errorMessage = error; });
    };
    UploadDetailComponent.prototype.DownLoadFile = function (fileName) {
        var _this = this;
        this.DocumentService.downloadFile(fileName)
            .subscribe(function (success) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(success, fileName);
        }, function (error) { return _this.errorMessage = error; });
    };
    UploadDetailComponent.prototype.DeleteFile = function (id) {
        var _this = this;
        if (window.confirm('Are you sure, you want to delete?')) {
            this.DocumentService.deleteFileById(id)
                .subscribe(function (success) {
                _this.loadDocument();
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    UploadDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadDetailComponent.prototype, "DocOwnerId", void 0);
    UploadDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'upload-detail',
            template: __webpack_require__(/*! ./upload-detail.component.html */ "./app/documents/upload-detail/upload-detail.component.html"),
            styles: [__webpack_require__(/*! ./upload-detail.component.css */ "./app/documents/upload-detail/upload-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"],
            ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ClientApp_app_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], UploadDetailComponent);
    return UploadDetailComponent;
}());



/***/ }),

/***/ "./app/documents/upload/upload.component.css":
/*!***************************************************!*\
  !*** ./app/documents/upload/upload.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".has-error input[type=\"text\"],\r\n.has-error textarea,\r\n.has-error input[type=\"file\"] {\r\n    border-color: rgb(216, 12, 12);\r\n    color: rgb(230, 14, 14);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZG9jdW1lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2RvY3VtZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFzLWVycm9yIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uaGFzLWVycm9yIHRleHRhcmVhLFxyXG4uaGFzLWVycm9yIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxNiwgMTIsIDEyKTtcclxuICAgIGNvbG9yOiByZ2IoMjMwLCAxNCwgMTQpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/documents/upload/upload.component.html":
/*!****************************************************!*\
  !*** ./app/documents/upload/upload.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"row\" style=\"margin-top: 10px;\" *ngIf=\"isTeacher\">\r\n    <div class=\"col-md-12\">\r\n\r\n        <div class=\"card\">\r\n            <h5 class=\"card-header\">Upload Document</h5>\r\n\r\n            <div class=\"card-body\">\r\n\r\n                <div class=\"row\" *ngIf=\"showMsg\">\r\n                    <div class=\"col-md-12\">\r\n                        <p class=\"alert alert-success\">\r\n                            <strong>Upload Success!</strong>\r\n\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n\r\n                   \r\n                        <form [formGroup]=\"uploadForm\" (ngSubmit)=\"upload()\">\r\n\r\n                            <div *ngIf=\"isSubmitted && formControls.name.errors\" class=\"alert alert-warning\">\r\n                                <div *ngIf=\"formControls.name.errors.required\">File name is required</div>\r\n                                <div *ngIf=\"formControls.name.errors.minlength\">File name must be more than {{formControls.name.errors.minlength}} characters</div>\r\n                                <div *ngIf=\"formControls.name.errors.maxlength\">File name must be less than {{formControls.name.errors.maxlength}}  characters</div>\r\n                            </div>\r\n\r\n                            <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.name.errors }\">\r\n\r\n                                <input type=\"text\" formControlName=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" />\r\n\r\n                            </p>\r\n\r\n                            <div *ngIf=\"isSubmitted && formControls.description.errors\" class=\"alert alert-warning\">\r\n                                <div *ngIf=\"formControls.description.errors.required\">Description is required</div>\r\n                                <div *ngIf=\"formControls.description.errors.minlength\">Description must be more than {{formControls.description.errors.minlength}} characters</div>\r\n                                <div *ngIf=\"formControls.description.errors.maxlength\">Description must be less than {{formControls.description.errors.maxlength}} characters</div>\r\n                            </div>\r\n                            <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.description.errors }\">\r\n\r\n                                <textarea formControlName=\"description\" placeholder=\"Description\" name=\"description\" class=\"form-control\"></textarea>\r\n\r\n                            </p>\r\n                            <div *ngIf=\"isSubmitted && formControls.fileData.errors\" class=\"alert alert-warning\">\r\n                                <div *ngIf=\"formControls.fileData.errors.required\">File to be upload is required</div>\r\n\r\n                            </div>\r\n                            <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.fileData.errors }\">\r\n\r\n                                <input type=\"file\" #fileInput formControlName=\"fileData\" name=\"fileData\" class=\"form-control\" />\r\n\r\n                            </p>\r\n\r\n                            <div class=\"form-group\">\r\n                                <input type=\"submit\" value=\"Upload\" class=\"btn btn-primary\" />\r\n                            </div>\r\n\r\n                        </form>\r\n                  </div>\r\n                 </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/documents/upload/upload.component.ts":
/*!**************************************************!*\
  !*** ./app/documents/upload/upload.component.ts ***!
  \**************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../document.service */ "./app/documents/document.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/app/auth/auth.service */ "./app/auth/auth.service.ts");






var UploadComponent = /** @class */ (function () {
    function UploadComponent(route, DocumentService, router, AuthService) {
        this.route = route;
        this.DocumentService = DocumentService;
        this.router = router;
        this.AuthService = AuthService;
        this.isSubmitted = false;
        this.isTeacher = false;
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.isTeacher = this.AuthService.isTeacher;
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]),
            fileData: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    };
    Object.defineProperty(UploadComponent.prototype, "formControls", {
        get: function () { return this.uploadForm.controls; },
        enumerable: true,
        configurable: true
    });
    UploadComponent.prototype.upload = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.uploadForm.invalid) {
            return;
        }
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        var formData = new FormData();
        formData.append('Name', this.uploadForm.value.name);
        formData.append('Description', this.uploadForm.value.description);
        formData.append('DocumentTypeId', this.DocumentTypeId);
        formData.append('DocOwnerTypeId', this.DocOwnerTypeId);
        formData.append('DocOwnerId', this.DocOwnerId);
        formData.append('FileData', fileToUpload);
        this.DocumentService.uploadDocument(formData).subscribe(function (result) {
            _this.DocumentService.isUploaded(true);
            _this.uploadForm.reset();
            _this.isSubmitted = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadComponent.prototype, "DocumentTypeId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadComponent.prototype, "DocOwnerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadComponent.prototype, "DocOwnerTypeId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileInput"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadComponent.prototype, "fileInputVariable", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'doc-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./app/documents/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./app/documents/upload/upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ClientApp_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], UploadComponent);
    return UploadComponent;
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