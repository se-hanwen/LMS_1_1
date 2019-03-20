import { Injectable, OnDestroy } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { takeUntil, tap, catchError } from 'rxjs/operators';
import { IModule } from '../Courses/course';

@Injectable({
  providedIn: 'root'
})
export class ModuleService implements  OnDestroy {
  private moduleUrl = "https://localhost:44396/api/courses1";
  private token: string="";
  private unsubscribe : Subject<void> = new Subject();

  private getAuthHeader() : HttpHeaders
  {
    return  new HttpHeaders({ "Authorization": "Bearer " + this.token });
  }

  constructor(private http: HttpClient,  private AuthService:AuthService) {
    this.AuthService.token
    .pipe(takeUntil(this.unsubscribe))
    .subscribe( i => this.token=i);
}


  CreateModule(Module: IModule): any {
    return this.http.post(this.moduleUrl,  Module,
        {headers: this.getAuthHeader() 
}).pipe(
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

ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
