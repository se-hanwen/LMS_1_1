import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { takeUntil, tap, catchError } from 'rxjs/operators';
var ModuleService = /** @class */ (function () {
    function ModuleService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.moduleUrl = "https://localhost:44396/api/module1";
        this.token = "";
        this.unsubscribe = new Subject();
        this.AuthService.token
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) { return _this.token = i; });
    }
    ModuleService.prototype.getAuthHeader = function () {
        return new HttpHeaders({ "Authorization": "Bearer " + this.token });
    };
    ModuleService.prototype.CheckIfDubblett = function (type, id, start, end) {
        var parmas = { "type": type, "id": id, "start": start, "end": end };
        return this.http.post(this.moduleUrl + "/TestIfInRange", parmas, {
            headers: this.getAuthHeader()
        }).pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
    };
    ModuleService.prototype.CreateModule = function (Module) {
        return this.http.post(this.moduleUrl, Module, {
            headers: this.getAuthHeader()
        }).pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
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
        return throwError(errorMessage);
    };
    ModuleService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    //Delete a module by a given guid.
    ModuleService.prototype.DeleteModule = function (id) {
        var urlString = this.moduleUrl + "/" + id;
        return this.http.delete(urlString, {
            headers: this.getAuthHeader()
        })
            .pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
    };
    ModuleService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthService])
    ], ModuleService);
    return ModuleService;
}());
export { ModuleService };
//# sourceMappingURL=module.service.js.map