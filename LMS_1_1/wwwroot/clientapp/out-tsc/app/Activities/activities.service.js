import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { takeUntil, tap, catchError } from 'rxjs/operators';
var ActivitiesService = /** @class */ (function () {
    function ActivitiesService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.activityUrl = "https://localhost:44396/api/activity1";
        this.token = "";
        this.unsubscribe = new Subject();
        this.AuthService.token
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) { return _this.token = i; });
    }
    ActivitiesService.prototype.getAuthHeader = function () {
        return new HttpHeaders({ "Authorization": "Bearer " + this.token });
    };
    ActivitiesService.prototype.CreateActivity = function (Activity) {
        return this.http.post(this.activityUrl + "/PostActivity", Activity, {
            headers: this.getAuthHeader()
        }).pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
    };
    ActivitiesService.prototype.getActitityTypes = function () {
        return this.http.get(this.activityUrl + "/ActivityTypes", { headers: this.getAuthHeader()
        }).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    ActivitiesService.prototype.EditActivity = function (id, Activity) {
        return this.http.put(this.activityUrl + "/" + id, Activity, {
            headers: this.getAuthHeader()
        }).pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
    };
    ActivitiesService.prototype.GetActivity = function (Activityid) {
        return this.http.get(this.activityUrl + "/" + Activityid, { headers: this.getAuthHeader()
        }).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    //Delete a activity by a given guid.
    ActivitiesService.prototype.DeleteActivity = function (id) {
        var urlString = this.activityUrl + "/" + id;
        return this.http.delete(urlString, {
            headers: this.getAuthHeader()
        })
            .pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
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
        return throwError(errorMessage);
    };
    ActivitiesService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ActivitiesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthService])
    ], ActivitiesService);
    return ActivitiesService;
}());
export { ActivitiesService };
//# sourceMappingURL=activities.service.js.map