import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsTeacherGuard implements CanActivate , CanLoad {
 
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean 
  {
    if(!(this.auth.IsTeacher()))
    {
      this.router.navigate(['/Account/Login']);
      return false;
    }
    return true;
  }
  
  isTeacher: boolean= false;


  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean   {
   //  this.auth.isTeacher.subscribe((i:Boolean) => {return i});
   
    if(!(this.auth.IsTeacher()))
    {
      this.router.navigate(['/Account/Login']);
      return false;
    }

    return true;
  }
  
}
