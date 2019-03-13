import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UploadDocumentInfoViewModel } from './document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
    private documentUrl = "https://localhost:44396/api/documents1/";

    constructor(private http: HttpClient) { }

    uploadDocument(document: any) {
        console.log(document);
        return this.http.post(this.documentUrl, document).pipe(
            tap(result => JSON.stringify(result)),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
