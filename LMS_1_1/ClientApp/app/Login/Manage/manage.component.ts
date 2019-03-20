import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { RegisterUser } from '../Register/registeruser';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent  implements OnInit, OnDestroy{

  private unsubscribe : Subject<void> = new Subject();


  private user:RegisterUser = new RegisterUser();
  errorMessage: string;
 isTeacher:boolean=false;
  constructor(private db: AuthService
    , private cd: ChangeDetectorRef,private route: ActivatedRoute
    ,private messhandler: LoginMessageHandlerService
    ,private router: Router, private PartipantService:PartipantService) { }

  ngOnInit() {
    this.PartipantService.GetUser(null)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe( (u:RegisterUser[]) => 
      {
        this.user=u[0];
        this.cd.markForCheck();
    });
  }

  public onRegister(theForm)
  {
    this.errorMessage = "";
    if(this.user.password!=this.user.confirmpassword)
    {
      this.errorMessage="Passwords doesn't match";
    }
    else
    {
      if(this.user.oldpassword==null)
        this.user.oldpassword="";

    
      this.db.UpdateUser(this.user)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe( status =>
        {
            if(status)
            {
                this.errorMessage="Update succeded";
            }
            else
            {
              this.errorMessage="Update failed";
            }
            this.cd.markForCheck();
        }
        
        );
      }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
