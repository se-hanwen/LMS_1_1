import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { catchError, tap, takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
var PartipantService = /** @class */ (function () {
    function PartipantService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.Choosed = [];
        this.CourseId = "";
        this.token = "";
        this.unsubscribe = new Subject();
        this.AuthService.token
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) {
            _this.token = i;
        });
    }
    PartipantService.prototype.GetStudentsOff = function () {
        var url = "https://localhost:44396/CourseUsers/GetusersOff";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    PartipantService.prototype.GetCourseName = function () {
        var url = "https://localhost:44396/CourseUsers/GetCourseName";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    PartipantService.prototype.GetStudentsOn = function () {
        var url = "https://localhost:44396/CourseUsers/GetusersOn";
        var parmas = { "CourseId": this.CourseId };
        return this.http.post(url, parmas, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
        /* map(
         (response:IPartipant[])=>
     {this.Choosed=response;
     }
     ),*/
        tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    PartipantService.prototype.SaveStudents = function () {
        var url = "https://localhost:44396/CourseUsers/AddStudentsToCourse";
        var Userids = [];
        for (var _i = 0, _a = this.Choosed; _i < _a.length; _i++) {
            var part = _a[_i];
            Userids.push(part.userid);
        }
        //let parmas={"CourseId":this.CourseId,Userids};    
        return this.http.post(url, { "CourseId": this.CourseId, Userids: Userids }, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
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
    PartipantService.prototype.GetCoursesOff = function (userid) {
        var url = "https://localhost:44396/CourseUsers/GetCoursesOff";
        var parmas = { "UserId": userid };
        return this.http.post(url, parmas, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    PartipantService.prototype.GetCoursesOn = function (userid) {
        var url = "https://localhost:44396/CourseUsers/GetCoursesOn";
        var parmas = { "UserId": userid };
        return this.http.post(url, parmas, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
        /* map(
        (response:IPartipant[])=>
    {this.Choosed=response;
    }
    ),*/
        tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    PartipantService.prototype.GetUserName = function (userid) {
        var url = "https://localhost:44396/CourseUsers/GetUserName";
        var parmas = { "UserId": userid };
        return this.http.post(url, parmas, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    PartipantService.prototype.SaveCourses = function (userid, Choosed) {
        var url = "https://localhost:44396/CourseUsers/AddCoursesToStudent";
        var courseids = [];
        for (var _i = 0, Choosed_1 = Choosed; _i < Choosed_1.length; _i++) {
            var part = Choosed_1[_i];
            courseids.push(part.id.toString());
        }
        //let parmas={"CourseId":this.CourseId,Userids};    
        return this.http.post(url, { "CourseId": userid, courseids: courseids }, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
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
    PartipantService.prototype.ngOnDestroy = function () {
        throw new Error("Method not implemented.");
    };
    PartipantService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthService])
    ], PartipantService);
    return PartipantService;
}());
export { PartipantService };
//# sourceMappingURL=partipant.service.js.map