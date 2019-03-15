import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsTeacherGuard implements CanActivate , CanLoad, OnDestroy {


  private unsubscribe : Subject<void> = new Subject();
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean 
  {
    return  this.isTeacher;
  }
  
  isTeacher: boolean= false;


  constructor(private auth: AuthService, private router: Router
     ) {

      this.CheckTeacher();
     }

 private CheckTeacher()
 {
  this.auth.isTeacher
  .pipe(takeUntil(this.unsubscribe))
  .subscribe((i:boolean) => 
  {
    this.isTeacher=i;
    if(!i)
    {
      this.router.navigate(['/Account/Login']);
     
    }
  });

 }

  canActivate(): boolean   {

 return  this.isTeacher;
 
   
  }
  
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
