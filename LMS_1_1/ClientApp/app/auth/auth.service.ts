import { Injectable, OnDestroy } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, takeUntil, catchError } from 'rxjs/operators';
import { User } from '../Login/login';
import { tokenData } from './tokenData';
import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { RegisterUser } from '../Login/Register/registeruser';
import { ICourseNameData } from '../AddPartipant/partipant';

@Injectable(
  {
    providedIn: 'root'
})
export class AuthService implements  OnDestroy 
{

  private unsubscribe : Subject<void> = new Subject();  
  // ...public jwtHelper: JwtHelperService,


   private tokenData: tokenData=new tokenData();

private tokenSource = new BehaviorSubject<string>('');
token = this.tokenSource.asObservable();

private tokenExpirationSource = new BehaviorSubject<Date>(new Date());
tokenExpiration = this.tokenExpirationSource.asObservable();

private firstNameSource = new BehaviorSubject<string>('');
firstName = this.firstNameSource.asObservable();

private lastNameSource = new BehaviorSubject<string>('');
lastName = this.lastNameSource.asObservable();

/*
private useridSource = new BehaviorSubject(' ');
userid = this.useridSource.asObservable();
*/
/*private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
private _isAuthenticated = this.isAuthenticatedSource.asObservable();*/
get isAuthenticated(): boolean
{
  if  (this.tokenData == null ||this.tokenData.token==null ||this.tokenData.token.length==0 )
  {
  
    this.tokenData.token=localStorage.getItem('id_token');
    if  (this.tokenData.token != null)
    {
        const Data=this.jwtHelper.decodeToken(this.tokenData.token);
        this.tokenData.tokenExpiration = new Date(localStorage.getItem("expires_at"))
        this.tokenData.isTeacher=Data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        this.tokenData.firstName=Data.given_name;
        this.tokenData.lastName=Data.family_name;
       
        this.tokenSource.next(this.tokenData.token==null?'':this.tokenData.token);
        this.tokenExpirationSource.next(this.tokenData.tokenExpiration);
        this.firstNameSource.next(this.tokenData.firstName);
        this.lastNameSource.next(this.tokenData.lastName);
    }
  }
/*	 
 AspNet.Identity.SecurityStamp: "Q5IWQMMVDLDJLI3VRCHWFOFLC2NKVVSC"
aud: "users"
exp: 1553012705
family_name: "Norberg"
given_name: "Penny"
http://schemas.microsoft.com/ws/2008/06/identity/claims/role: "Teacher"
http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name: "Penny@lysator.liu.se"
http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier: "e6e7ef33-179a-4fd0-90ec-f63bc9168482"
iss: "https://localhost:44396"
jti: "4d02d28c-57d5-4464-b8e5-9eb2875471f7"
sub: "Penny@lysator.liu.se"
unique_name: "Penny@lysator.liu.se"
*/

  return this.checkisAuthenticated(this.tokenData.token,this.tokenData.tokenExpiration);
}

/*private isTeacherSource = new BehaviorSubject<boolean>(false);
private _isTeacher = this.isTeacherSource.asObservable();*/

get isTeacher()
{
  return this.checkisAuthenticated(this.tokenData.token,this.tokenData.tokenExpiration)?this.checkIsTeacher(this.tokenData.isTeacher):false;
}


RealisAuthenticated : boolean = false;
RealisTeacher : boolean = false;

constructor(private http: HttpClient,public jwtHelper: JwtHelperService
) {
  /*this.isAuthenticated
  .pipe(takeUntil(this.unsubscribe))
  .subscribe( i => {
    this.RealisAuthenticated=i;
//    this.cd.markForCheck();
  });
  this.isTeacher
  .pipe(takeUntil(this.unsubscribe))
  .subscribe(i => {
      this.RealisTeacher=i;
   //   this.cd.markForCheck();
  });*/
  this.token
  .pipe(takeUntil(this.unsubscribe))
  .subscribe(i =>{ 
      this.Realtoken=i;
  //    this.cd.markForCheck();
  });
}
/*
ngOnInit(): void {
  this.isAuthenticated.subscribe( i => this.RealisAuthenticated=i);
  this.isTeacher.subscribe(i => this.RealisTeacher=i);
}*/

/*
  get token(): Observable<string> {
    return this.tokenData.token
  }
  

  get tokenExpiration():Date
  {
    return this.tokenData.tokenExpiration;
  }


  get FirstName():string
  {
    return this.tokenData.firstName;
  }

  get LastName():string
  {
    return this.tokenData.lastName;
  }
  get Userid():string
  {
    return this.tokenData.userid;
  }
  */
 private url:string="https://localhost:44396";

  private _isTeacher:string="";
  private Realtoken: string="";
   
  private getAuthHeader() : HttpHeaders
  {
    return  new HttpHeaders({ "Authorization": "Bearer " + this.Realtoken });
  }
  
  public login(creds:User) : Observable<boolean> | undefined {
    return this.http.post(this.url+"/account/createtoken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
 
          this.tokenSource.next(tokenInfo.token==null?'':tokenInfo.token);
          this.tokenExpirationSource.next(tokenInfo.tokenExpiration);
          this.firstNameSource.next(tokenInfo.firstName);
          this.lastNameSource.next(tokenInfo.lastName);
          localStorage.setItem('id_token', tokenInfo.token);
          localStorage.setItem("expires_at", JSON.stringify(tokenInfo.tokenExpiration) );

      //    this.useridSource.next(tokenInfo.userid);
         // this.isAuthenticatedSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration));
        //  this.isTeacherSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration)?this.checkIsTeacher(tokenInfo.isTeacher):false)




          this.tokenData.token = tokenInfo.token;
          this.tokenData.tokenExpiration = tokenInfo.expiration;
          this.tokenData.isTeacher=tokenInfo.isTeacher;
          this.tokenData.firstName=tokenInfo.firstName;
          this.tokenData.lastName=tokenInfo.lastName;
          this.tokenData.userid=tokenInfo.userid;
          return true;
        })
        
        );
  }

     //  
  /*   public IsAuthenticated(): boolean
     {
       return this.RealisAuthenticated;
     } 

     public IsTeacher(): boolean
     {
       return this.RealisTeacher;
     } 
*/
 public logout(): void
 {
    this.tokenData=new tokenData();
    this.tokenSource.next('');
    this.tokenExpirationSource.next(this.tokenData.tokenExpiration);
    this.firstNameSource.next('');
    this.lastNameSource.next('');
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  //  this.isAuthenticatedSource.next(false);
  //  this.isTeacherSource.next(false)
 }

  public register(registeruser: RegisterUser) : Observable<ICourseNameData> | undefined
  {
    return this.http.post(this.url+"/account/RegisterNewUser", registeruser
    ,{headers:this.getAuthHeader()}
    )
    .pipe(
      map((response: any) => {
      return response;
    })
    );
    
  }

  public DeleteUser(id: string) {
    let url:string="https://localhost:44396/account/DeleteUser";  
    let parmas={"CourseId":id};
    return this.http.post(url,parmas,
    {headers: this.getAuthHeader() 
})
.pipe(catchError(this.handleError));

  }

  UpdateUser(user: RegisterUser) {
    let url:string="https://localhost:44396/account/UpdateUser";  
    return this.http.post(url,user,
    {headers: this.getAuthHeader() 
})
.pipe(catchError(this.handleError));

  }
  UpdateUserAdmin(user: RegisterUser) {
    let url:string="https://localhost:44396/account/UpdateUserAdmin";  
    return this.http.post(url,user,
    {headers: this.getAuthHeader() 
})
.pipe(catchError(this.handleError));

  }


  private checkisAuthenticated(token : string, tokenExpiration : Date ) :boolean {
    let res=!(token.length == 0 || tokenExpiration < new Date());
    if (!res && token.length>0)
        this.logout();
    // Add time to expiration
    return res;
  }

  
   private checkIsTeacher(isTeacher: string): boolean 
  {

      if(isTeacher == "Teacher")
          return true;
        return false;

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