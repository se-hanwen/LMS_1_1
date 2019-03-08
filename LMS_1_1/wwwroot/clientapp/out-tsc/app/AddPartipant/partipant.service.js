import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
var PartipantService = /** @class */ (function () {
    function PartipantService(http) {
        this.http = http;
        this.Choosed = [];
    }
    PartipantService.prototype.GetStudentsOff = function (CourseId) {
        var url = "https://localhost:44396/CourseUsers/Getusers";
        return this.http.post(url, { CourseId: CourseId, choosed: false })
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    PartipantService.prototype.GetStudentsOn = function (CourseId) {
        var url = "https://localhost:44396/CourseUsers/Getusers";
        return this.http.post(url, { CourseId: CourseId, choosed: true })
            .pipe(
        /* map(
         (response:IPartipant[])=>
     {this.Choosed=response;
     }
     ),*/
        tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    PartipantService.prototype.SaveStudents = function (CourseId) {
        var url = "https://localhost:44396/CourseUsers/AddStudentsToCourse";
        var userids = [];
        for (var _i = 0, _a = this.Choosed; _i < _a.length; _i++) {
            var part = _a[_i];
            userids.push(part.Userid);
        }
        return this.http.post(url, { CourseId: CourseId, userids: userids })
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
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
        return throwError(errorMessage);
    };
    PartipantService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PartipantService);
    return PartipantService;
}());
export { PartipantService };
//# sourceMappingURL=partipant.service.js.map