import { Injectable } from '@angular/core';
import { ICourse } from './course';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Guid } from 'guid-typescript';
import { Data } from '@angular/router';

@Injectable(
    {
        providedIn: 'root'
    })

export class CourseService {
    private courseUrl = "https://localhost:44396/api/courses1";
   
    constructor(private http: HttpClient) {

    }
    getCourses(): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(this.courseUrl).pipe(
            tap(data => console.log('All:' + JSON.stringify(data))),
            catchError(this.handleError)
            );
    }
    getCourseById(id: string): Observable<ICourse> {
        return this.http.get<ICourse>(this.courseUrl +"/"+id).pipe(
            tap(data => console.log('All:' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getCourseAllById(id: string): Observable<ICourse> {
        return this.http.get<ICourse>(this.courseUrl +"/All?id=" +id).pipe(
            tap(data => console.log('All:' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    createCourse(course: any) {

        return this.http.post(this.courseUrl,  course).pipe(
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