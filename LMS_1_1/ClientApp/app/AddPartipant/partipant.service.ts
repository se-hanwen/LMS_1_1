import { Injectable } from '@angular/core';
import { IPartipant,ICourseNameData,ICourseNameSubdata } from './partipant';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PartipantService{

    public Choosed: IPartipant[] = [];

    public CourseId: string="";

    constructor(private http: HttpClient) {}
    


    public GetStudentsOff(): Observable<IPartipant[] | undefined>
    {
        let url:string="https://localhost:44396/CourseUsers/GetusersOff";  
        let parmas={"CourseId":this.CourseId}; 
        return this.http.post<IPartipant[]>(url,parmas )
        .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
        );    
    }

    public GetCourseName(): Observable<ICourseNameData| undefined>
    {
        let url:string="https://localhost:44396/CourseUsers/GetCourseName";  
        let parmas={"CourseId":this.CourseId}; 
        return this.http.post<ICourseNameData>(url,parmas )
        .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
        ); 

     }
    public GetStudentsOn(): Observable<IPartipant[] | undefined>
    {
        let url:string="https://localhost:44396/CourseUsers/GetusersOn";  
        let parmas={"CourseId":this.CourseId};   
        return this.http.post<IPartipant[]>(url,parmas)
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

    public SaveStudents()
    {
        let url:string="https://localhost:44396/CourseUsers/AddStudentsToCourse";  
        let Userids: string[] =[];
        for(const part of this.Choosed )
        {
            Userids.push(part.userid);
        }
        //let parmas={"CourseId":this.CourseId,Userids};    
        return this.http.post(url,{"CourseId":this.CourseId,Userids})
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