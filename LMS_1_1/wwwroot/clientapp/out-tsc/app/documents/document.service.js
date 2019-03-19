import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, takeUntil } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
var DocumentService = /** @class */ (function () {
    function DocumentService(http, AuthService) {
        var _this = this;
        this.http = http;
        this.AuthService = AuthService;
        this.subject = new Subject();
        this.token = "";
        this.unsubscribe = new Subject();
        this.documentUrl = "https://localhost:44396/api/documents1/";
        this.httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'text/html, application/xhtml+xml, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": "Bearer " + this.token
            }),
            responseType: 'blob'
        };
        this.httpOptions2 = {
            headers: new HttpHeaders({
                "Authorization": "Bearer " + this.token
            })
        };
        this.AuthService.token
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) { return _this.token = i; });
    }
    DocumentService.prototype.isUploaded = function (message) {
        this.subject.next({ message: message });
    };
    DocumentService.prototype.getUplaodtStatus = function () {
        return this.subject.asObservable();
    };
    DocumentService.prototype.getDocumentsByOwnerId = function (id) {
        console.log(this.documentUrl);
        return this.http.get(this.documentUrl + "ByOwner?id=" + id, this.httpOptions2).pipe(tap(function (data) { return console.log('All:' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    DocumentService.prototype.uploadDocument = function (document) {
        return this.http.post(this.documentUrl, document, this.httpOptions2).pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
    };
    DocumentService.prototype.downloadFile = function (filePath) {
        var input = filePath;
        return this.http.post(this.documentUrl + "DownloadFile?fileName=" + input, {}, this.httpOptions).pipe(tap(function (data) {
            return console.log(data);
        }), catchError(this.handleError));
    };
    DocumentService.prototype.deleteFileById = function (id) {
        return this.http.delete(this.documentUrl + id, this.httpOptions2).pipe(tap(function (data) { return console.log(data); }), catchError(this.handleError));
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
        return throwError(errorMessage);
    };
    DocumentService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    DocumentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthService])
    ], DocumentService);
    return DocumentService;
}());
export { DocumentService };
//# sourceMappingURL=document.service.js.map