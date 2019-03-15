import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IRegisterUser,RegisterUser } from './registeruser';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy  {

  private unsubscribe : Subject<void> = new Subject();
  user:RegisterUser= new RegisterUser();
  errorMessage: string;
  courseForm: FormGroup;
  
  constructor(private db: AuthService
    , private cd: ChangeDetectorRef
   ) { }

  ngOnInit() {
    
  }

  public onRegister()
  {
    this.errorMessage = "";
    this.db.register(this.user)
    .pipe(takeUntil(this.unsubscribe))
      .subscribe(success => {
        if (success) 
            return  true;  
        this.cd.markForCheck();
      },
         err =>  this.errorMessage = "Failed to Create user");
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
