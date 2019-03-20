import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { IActivity, Activity, IActivityType } from 'ClientApp/app/Courses/course';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
import { ActivitiesService } from '../activities.service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  private unsubscribe : Subject<void> = new Subject();
  Activity: IActivity  = new Activity();
  Modulestartdate: Date;
  Moduleenddate: Date;
  errorMessage: string="";
  ModuleName: string="";
  Activityid: string="";
  ActivityTypes:IActivityType[];
  Courseid: string ="";

  constructor(private db: AuthService
    , private cd: ChangeDetectorRef ,private route: ActivatedRoute
    ,private messhandler: LoginMessageHandlerService
    ,private ActivititesService: ActivitiesService) { }

  ngOnInit() {
    this.Activityid = this.route.snapshot.paramMap.get("id"); // null if no hit?
    this.messhandler.Modulid
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
       // let tmpguid= Guid.parse(status); 
        this.Activity.moduleid=status;
        this.cd.markForCheck();
      }
    )
    this.messhandler.Courseid
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
       // let tmpguid= Guid.parse(status); 
        this.Courseid=status;
        this.cd.markForCheck();
      }
    )

    this.messhandler.ModulStartDate
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        this.Modulestartdate=status;
        this.cd.markForCheck();
      }
    )
    this.messhandler.ModulEndDate
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        this.Moduleenddate=status;
        this.cd.markForCheck();
      }
    )
    this.messhandler.ModulName
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        this.ModuleName=status;
        this.cd.markForCheck();
      }
    )
    this.ActivititesService.getActitityTypes()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      resp => 
      {
        this.ActivityTypes=resp;
        this.cd.markForCheck();
      });
      this.ActivititesService.GetActivity(this.Activityid)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        resp =>  
        { 
          this.Activity=resp;
          this.cd.markForCheck();
        });
  }

  public gotDate():void
  {
     if(this.Activity.startDate != null && this.Activity.endDate != null)
     {
        this.messhandler.SendDubbId(this.Activity.moduleid);
        this.messhandler.SendDubbType("Activity");
        this.messhandler.SendDubbStart(new Date(this.Activity.startDate+":00.000Z"));
        this.messhandler.SendDubbEnd(new Date(this.Activity.endDate+":00.000Z"));
     }
  
    // post data
  }
  public Register(theForm):void
  {
    this.errorMessage = "";
    if(new Date(this.Activity.startDate+":00").valueOf()<this.Modulestartdate.valueOf()+1)
    {
        let asd=this.Activity.startDate.valueOf();
        let msd=this.Modulestartdate.valueOf();
        this.errorMessage= this.errorMessage + "Start date on activity may not be before module start date ("+this.Modulestartdate+")";
    }
    if(new Date(this.Activity.endDate+":59").valueOf()<this.Modulestartdate.valueOf())
    {
        this.errorMessage= this.errorMessage + "End date on activity may not be before module start date ("+this.Modulestartdate+")";
    } 
    if(new Date(this.Activity.startDate+":00").valueOf()>this.Moduleenddate.valueOf())
    {
        this.errorMessage= this.errorMessage + "Start date on activity may not be after module end date ("+this.Moduleenddate+")";
    }
    if(new Date(this.Activity.endDate+":59").valueOf()>this.Moduleenddate.valueOf())
    {
        this.errorMessage= this.errorMessage + "End date on activity may not be after module end date ("+this.Moduleenddate+")";
    } 
    if(this.Activity.endDate.valueOf()<this.Activity.startDate.valueOf())
    {
      this.errorMessage= this.errorMessage +" A module must end after it's start";
    } 
    if(this.errorMessage=="")
    {
      this.ActivititesService.EditActivity(this.Activity.id,this.Activity)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe( status =>
        {
 
            this.errorMessage="Activity updated"
  
         
          this.cd.markForCheck();
        }
        ,err =>  this.errorMessage = <any>err
        
        )
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
