import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterUser } from '../Register/registeruser';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit, OnDestroy {
  private unsubscribe : Subject<void> = new Subject();

  private user:RegisterUser;
  private oldpassword:string;
  errorMessage: string;
 isTeacher:boolean=false;
  constructor(private db: AuthService
    , private cd: ChangeDetectorRef,private route: ActivatedRoute
    ,private messhandler: LoginMessageHandlerService
    ,private router: Router, private PartipantService:PartipantService) { }

  ngOnInit() {
    this.isTeacher=this.db.isTeacher;
    let id = this.route.snapshot.paramMap.get("id"); // null if no hit?
    this.PartipantService.GetUsers(id)
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
    if(this.isTeacher)
    {
        this.db.UpdateUserAdmin(this.user)
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
    else
    {
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
