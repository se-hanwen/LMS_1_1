import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IRegisterUser,RegisterUser } from './registeruser';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy  {

  private unsubscribe : Subject<void> = new Subject();
  private user:RegisterUser= new RegisterUser();
  private errorMessage: string;
  private courseForm: FormGroup;
  private HasChoosedCourse: boolean = false;
  
  constructor(private db: AuthService
    , private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService
   ) { }

  ngOnInit() {
    this.messhandler.HasChoosedCourses
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        this.HasChoosedCourse=status
        this.cd.markForCheck();

      }

    )
  }

  public onRegister()
  {
    this.errorMessage = "";
    this.db.register(this.user)
    .pipe(takeUntil(this.unsubscribe))
      .subscribe(success => { 
         if(this.user.role=="Student")
         { // om student medella add
            this.messhandler.SendUserId(success.value.name);
         }  
        this.cd.markForCheck();
        return  true; 
      },
         err =>  this.errorMessage = "Failed to Create user");
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
