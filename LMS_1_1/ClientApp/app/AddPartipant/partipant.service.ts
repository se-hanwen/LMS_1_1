import { Injectable } from '@angular/core';
import { Partipant } from './partipant';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
@Injectable()

export class PartipantService{

    public Choosed: Partipant[] = [];

    constructor(private http: HttpClient,
        private CourseId: string) {}
    /*
    public GetStudents(choosed : boolean): Observable<Partipant[] | undefined>
    {
        let url:string="/CourseUsers/AddStudentsToCourse";

    }
*/
    public SaveStudents()
    {


    } 

    public AddStudent(user: Partipant )
    {
        let item: Partipant = this.Choosed.find(i => i.Userid == user.Userid  );
        
        if (!item) 
        {
            this.Choosed.push(user);
        }
    
    }

    public RemoveStudent(user: Partipant)
    {
        let item: Partipant = this.Choosed.find(i => i.Userid == user.Userid  );
        let index = this.Choosed.indexOf(item);
        if(item)
        {
            
            this.Choosed.splice(index,1);
        }
    }
}