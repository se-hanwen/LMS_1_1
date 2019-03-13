import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
        this.documentUrl = "https://localhost:44396/api/documents1/";
    }
    DocumentService.prototype.uploadDocument = function (document) {
        console.log(document);
        return this.http.post(this.documentUrl, document).pipe(tap(function (result) { return JSON.stringify(result); }), catchError(this.handleError));
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
    DocumentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DocumentService);
    return DocumentService;
}());
export { DocumentService };
//# sourceMappingURL=document.service.js.map