import { Injectable, OnInit } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Login/login';
import { tokenData } from './tokenData';

@Injectable(
  {
    providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private http: HttpClient) {}
  // ...public jwtHelper: JwtHelperService,

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
   private tokenData: tokenData=new tokenData();


  get token(): string {
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
 private url:string="https://localhost:44396";

  private _isTeacher:string="";

  
  public login(creds:User) {
    return this.http.post(this.url+"/account/createtoken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
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
 public logout()
 {
    this.tokenData=new tokenData();
 }

  public isAuthenticated(): boolean {
    return !(this.tokenData.token.length == 0 && this.tokenData.tokenExpiration > new Date());
  }

  public IsTeacher(): boolean 
  {
    if(this.isAuthenticated())
    {
      if(this.tokenData.isTeacher == "Teacher")
          return true;
        return false;
    }
    
    return false;
  }
}