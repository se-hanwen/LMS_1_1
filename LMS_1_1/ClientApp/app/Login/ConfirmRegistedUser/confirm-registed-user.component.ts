import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-confirm-registed-user',
  templateUrl: './confirm-registed-user.component.html',
  styleUrls: ['./confirm-registed-user.component.css']
})
export class ConfirmRegistedUserComponent implements OnInit,OnDestroy {

  private unsubscribe : Subject<void> = new Subject();

  message: string="";


  constructor(private route:Router
    ,private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService) { }

  ngOnInit() {
    this.messhandler.ConfirmMessage
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        this.message=status;
        this.messhandler.CourseSaved 
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
           courses =>
           {
            if(courses && courses.length>0)
            {
              this.message = this.message + " On " +courses;
            }
          }
        );
        this.messhandler.SendUserId("");
        this.cd.markForCheck();
      }
    )

  }

  ngOnDestroy(): void {
    this.messhandler.SendCourseSaved("");
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
