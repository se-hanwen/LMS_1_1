import { Injectable, OnInit } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate, CanLoad {

  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean 
  {
    if(!(this.auth.IsAuthenticated()))
    {
      this.router.navigate(['/Account/Login']);
      return false;
    }
    return true;
  }
  



  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean   {
   //  this.auth.isTeacher.subscribe((i:Boolean) => {return i});
   
    if(!(this.auth.IsAuthenticated()))
    {
      this.router.navigate(['/Account/Login']);
      return false;
    }

    return true;
  }
}
