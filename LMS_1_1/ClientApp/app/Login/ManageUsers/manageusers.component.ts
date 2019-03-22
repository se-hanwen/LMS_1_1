import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { Router } from '@angular/router';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { RegisterUser } from '../Register/registeruser';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit , OnDestroy{

  private unsubscribe : Subject<void> = new Subject();
 private togglechoose: boolean=false;
 private lastuserid: string = ""
  public users: RegisterUser[]=[];
  constructor(private PartipantService: PartipantService, private route:Router
    ,private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService) { }

  ngOnInit() {
    this.messhandler.SendIsteacher(true);
    this.PartipantService.GetUsers()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        this.users=status;
        this.cd.markForCheck();
      }
    );
  }

  public ChooseUser(id)
  {
    if(this.users.find(u => u.id==id).role!="Teacher" )
    {
       if(this.togglechoose && this.lastuserid==id)
       {
          this.togglechoose=false;
          this.messhandler.SendIsteacher(true);
       }
       else
       {
        this.togglechoose=true;
        this.lastuserid=id;
        this.messhandler.SendIsteacher(false);
        this.messhandler.SendUserId(id);
       }

    }
    else
    {
      this.togglechoose=false;
      this.messhandler.SendIsteacher(true);
    }
  }


  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
