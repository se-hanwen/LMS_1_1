import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';

@Component({
  selector: 'loginpartial',
  templateUrl: './loginpartial.component.html',
  styleUrls: ['./loginpartial.component.css']
})
export class LoginpartialComponent implements OnInit, OnDestroy {
  private unsubscribe : Subject<void> = new Subject();
  isAuthenticated: boolean
  isTeacher: boolean
  firstName: string;
  lastName: string;
  constructor(private AuthService:AuthService,private router: Router
    ,private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService
    ) { }

  ngOnInit() {

   /* this.isAuthenticated=this.AuthService.isAuthenticated;
    this.isTeacher=this.AuthService.isTeacher;
*/  
    this.messhandler.CurrUserAuth
    .pipe(takeUntil(this.unsubscribe))
    .subscribe( status =>
      {
        this.isAuthenticated=status;
        this.cd.markForCheck(); 
      }
    );
    this.messhandler.CurrUserTeacher
    .pipe(takeUntil(this.unsubscribe))
    .subscribe( status =>
      {
        this.isTeacher=status;
        this.cd.markForCheck(); 
      }
    );
   // this.AuthService.isAuthenticated.subscribe( i => this.isAuthenticated=i);
    //this.AuthService.isTeacher.subscribe(i => this.isTeacher=i);
    this.AuthService.firstName
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((fn: string) =>
    { 
      this.firstName=fn;
      this.cd.markForCheck(); 
    }
      );
    this.AuthService.lastName
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((ln: string) =>
    {
       this.lastName=ln;
       this.cd.markForCheck(); 
    }
       );
  }



  public logout()
  {
    this.AuthService.logout();
    this.router.navigate(['/Account/Login']);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
