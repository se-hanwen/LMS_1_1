import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}
  // ...

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  public IsTeacher(): boolean 
  {
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token))
        return false;
    const decodedToken = this.jwtHelper.decodeToken(token);  
    decodedToken.claims;
    
    return true;
  }
}