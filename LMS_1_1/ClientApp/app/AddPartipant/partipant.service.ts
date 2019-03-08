import { Injectable } from '@angular/core';
import { IPartipant } from './partipant';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PartipantService{

    public Choosed: IPartipant[] = [];


    constructor(private http: HttpClient) {}
    


    public GetStudentsOff(CourseId: string): Observable<IPartipant[] | undefined>
    {
        let url:string="https://localhost:44396/CourseUsers/GetusersOff";     
        return this.http.post<IPartipant[]>(url,{CourseId})
        .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
        );    
    }

    public GetStudentsOn(CourseId: string): Observable<IPartipant[] | undefined>
    {
        let url:string="https://localhost:44396/CourseUsers/GetusersOn";     
        return this.http.post<IPartipant[]>(url,{CourseId})
        .pipe(
           /* map(
            (response:IPartipant[])=>
        {this.Choosed=response;
        }
        ),*/
            tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
        );  
    }

    public SaveStudents(CourseId: string)
    {
        let url:string="https://localhost:44396/CourseUsers/AddStudentsToCourse";  
        let userids: string[] =[];
        for(const part of this.Choosed )
        {
            userids.push(part.userid);
        }
        return this.http.post(url,{CourseId,userids})
        .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError));

    } 

    public AddStudent(user: IPartipant ):void
    {
        let item: IPartipant = this.Choosed.find(i => i.userid == user.userid  );
        
        if (!item) 
        {
            this.Choosed.push(user);
        }
    
    }

    public RemoveStudent(user: IPartipant):void
    {
        let item: IPartipant = this.Choosed.find(i => i.userid == user.userid  );
        let index = this.Choosed.indexOf(item);
        if(item)
        {
            
            this.Choosed.splice(index,1);
        }
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