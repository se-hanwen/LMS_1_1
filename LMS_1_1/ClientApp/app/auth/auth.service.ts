import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser } from '../Login/login';
import { tokenData } from './tokenData';

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService,private http: HttpClient) {}
  // ...

   private tokenData: tokenData;

  private _token: string = "";
  get token(): string {
    return this._token
  }
  
  private _tokenExpiration: Date = new Date();
  get tokenExpiration():Date
  {
    return this._tokenExpiration;
  }
  private _isTeacher:string="";

  
  public login(creds:IUser) {
    return this.http.post("/account/createtoken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
          this._token = tokenInfo.token;
          this._tokenExpiration = tokenInfo.expiration;
          this._isTeacher=tokenInfo.isTeacher;
          return true;
        }));
  }


  public isAuthenticated(): boolean {
    return this.token.length == 0 || this.tokenExpiration > new Date();
  }

  public IsTeacher(): boolean 
  {
    if(this.isAuthenticated())
    {
      if(this._isTeacher == "Teacher")
          return true;
        return false;
    }
    
    return false;
  }
}