import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
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
        return this.http.get(this.courseUrl + "/foruser", { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        }).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    CourseService.prototype.getCourseById = function (id) {
        return this.http.get(this.courseUrl + "/" + id, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        }).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    CourseService.prototype.getCourseAllById = function (id) {
        return this.http.get(this.courseUrl + "/All?id=" + id, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        }).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    CourseService.prototype.getCourseAndModulebyId = function (courseid) {
        return this.http.get(this.courseUrl + "/CAndM?id=" + courseid, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        }).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    CourseService.prototype.getActivitybymodulId = function (Moduleid) {
        return this.http.get(this.courseUrl + "/AfromMid?id=" + Moduleid, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        }).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    CourseService.prototype.getModulAndActivitybyId = function (Moduleid) {
        return this.http.get(this.courseUrl + "/MAndAfromMid?id=" + Moduleid, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        }).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    CourseService.prototype.createCourse = function (course) {
        return this.http.post(this.courseUrl, course, { headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        }).pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
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
        return throwError(errorMessage);
    };
    CourseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthService])
    ], CourseService);
    return CourseService;
}());
export { CourseService };
//# sourceMappingURL=course.service.js.map