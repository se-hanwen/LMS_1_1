import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { User } from '../login';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy  {

  private unsubscribe : Subject<void> = new Subject();
   user:User = new User();
   errorMessage: string = "";

  constructor(private db: AuthService
    , private router: Router
    ,private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService
    ) { 

    }

  ngOnInit() {
    this.user.userName="";
    this.user.passWord="";
    this.user.rememberMe=false;
  }
  onLogin() {
    this.errorMessage = "";
    this.db.login(this.user)
    .pipe(takeUntil(this.unsubscribe))
      .subscribe(success => {
        if (success) 
        {
          this.messhandler.SendCurrUserAuth(this.db.isAuthenticated);
          this.messhandler.SendCurrUserTeacher(this.db.isTeacher);
          this.router.navigate(["courses"]); 
        }
        this.cd.markForCheck(); 
      },
         err => this.errorMessage = "Failed to login");
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
