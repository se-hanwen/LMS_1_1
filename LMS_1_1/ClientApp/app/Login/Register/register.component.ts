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
 // private theForm: FormGroup;
  private HasChoosedCourse: boolean = false;
  private returnmessage:string =null;

  private saveduser: boolean=false;
  constructor(private db: AuthService
    , private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService
    ,private router: Router
   ) { }

  ngOnInit() {
    this.messhandler.SendUserId("");
    this.messhandler.SendIsteacher(false);
    this.messhandler.HasChoosedCourses
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        this.HasChoosedCourse=status;
        this.cd.markForCheck();
      }
    )
    this.messhandler.HasSavedCoures
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        if(status)
        {
          if(this.saveduser)
          {
            this.messhandler.SendConfirm(this.returnmessage);
            this.router.navigate(['/Account/ConfirmRegistedUser']);
          }

        }
        this.cd.markForCheck();
      }
    )
  }

   public OnToggleRole()
   {

      if(this.user.role=="Student")
      {
        this.messhandler.SendIsteacher(false);
      }
      else
      {
        this.messhandler.SendIsteacher(true);
      }
   }

  public onRegister(TheForm)
  {
    this.errorMessage = "";
    this.db.register(this.user)
    .pipe(takeUntil(this.unsubscribe))
      .subscribe(success => { 
        this.saveduser=true;
        TheForm.form.disable();
        this.cd.markForCheck();
        let msg="Created "+this.user.firstName+" "+this.user.lastName+" with the role "+this.user.role;
        if(this.user.role=="Student")
        {
          // om student medella add
          this.messhandler.SendUserId(success.value.name);
          this.returnmessage=msg;
        }
        else
        {
          this.messhandler.SendConfirm(msg );
            this.router.navigate(['/Account/ConfirmRegistedUser']);
        }

        return  true; 
      },
         err =>  this.errorMessage = <any>err);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
