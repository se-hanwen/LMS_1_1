import { Injectable, OnInit } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Login/login';
import { tokenData } from './tokenData';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
})
export class AuthService  {

  
  // ...public jwtHelper: JwtHelperService,


   private tokenData: tokenData=new tokenData();

private tokenSource = new BehaviorSubject(' ');
token = this.tokenSource.asObservable();

private tokenExpirationSource = new BehaviorSubject(new Date());
tokenExpiration = this.tokenExpirationSource.asObservable();

private firstNameSource = new BehaviorSubject(' ');
firstName = this.firstNameSource.asObservable();

private lastNameSource = new BehaviorSubject(' ');
lastName = this.lastNameSource.asObservable();


private useridSource = new BehaviorSubject(' ');
userid = this.useridSource.asObservable();

private isAuthenticatedSource = new BehaviorSubject(false);
isAuthenticated = this.isAuthenticatedSource.asObservable();

private isTeacherSource = new BehaviorSubject(false);
isTeacher = this.isTeacherSource.asObservable();

RealisAuthenticated : boolean = false;
RealisTeacher : boolean = false;

constructor(private http: HttpClient) {
  this.isAuthenticated.subscribe( i => this.RealisAuthenticated=i);
  this.isTeacher.subscribe(i => this.RealisTeacher=i);

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

  
  public login(creds:User) : Observable<boolean> | undefined {
    return this.http.post(this.url+"/account/createtoken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
         
          this.tokenSource.next(tokenInfo.token==null?'':tokenInfo.token);
          this.tokenExpirationSource.next(tokenInfo.tokenExpiration);
          this.firstNameSource.next(tokenInfo.firstName);
          this.lastNameSource.next(tokenInfo.lastName);
          this.useridSource.next(tokenInfo.userid);
          this.isAuthenticatedSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration));
          this.isTeacherSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration)?this.checkIsTeacher(tokenInfo.isTeacher):false)


          

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
     public IsAuthenticated(): boolean
     {
       return this.RealisAuthenticated;
     } 

     public IsTeacher(): boolean
     {
       return this.RealisTeacher;
     } 

 public logout()
 {
    this.tokenData=new tokenData();
 }

  private checkisAuthenticated(token : string, tokenExpiration : Date ) :boolean {
    return !(token.length == 0 && tokenExpiration > new Date());
  }

  
   private checkIsTeacher(isTeacher: string): boolean 
  {

      if(isTeacher == "Teacher")
          return true;
        return false;

  }
  
}