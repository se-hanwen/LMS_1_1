import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { RegisterUser } from '../Register/registeruser';
import { ActivatedRoute, Router } from '@angular/router';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';


@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit, OnDestroy  {
  private unsubscribe : Subject<void> = new Subject();
   user: RegisterUser;
   errtext:string ="";
  constructor(private route: ActivatedRoute,  private router: Router, private db:AuthService, private PartipantService:PartipantService
    ,private cd: ChangeDetectorRef, private messagehandler: LoginMessageHandlerService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.PartipantService.GetUser(id)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe( (u:RegisterUser[]) => 
      {
        this.user=u[0];
        this.cd.markForCheck();
    });
  }

   public ConfirmedDelete()
   {
    this.db.DeleteUser(this.user.id)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe( status =>
      {
        if(status)
        {
          this.errtext="User Deleted"
          
          this.messagehandler.SendConfirm("User "+this.user.firstName+' '+this.user.lastName+" Deleted")
          this.messagehandler.SendConfirmGoOnUrl(["/Account/Delete"]);
          this.messagehandler.SendConfirmGoOnMessage("Delete another user?");
          this.messagehandler.SendConfirmGoBackUrl(["/Account/ManageUsers"]);
          this.router.navigate(['Account/Confirm']);
        }
        this.cd.markForCheck();
      }
      ,err =>  this.errtext = <any>err
      
      )
   }

   ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
