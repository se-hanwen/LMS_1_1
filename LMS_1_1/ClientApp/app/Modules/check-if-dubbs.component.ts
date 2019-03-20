import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginMessageHandlerService } from '../Login/login-message-handler.service';
import { ModuleService } from './module.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'check-if-dubbs',
  templateUrl: './check-if-dubbs.component.html',
  styleUrls: ['./check-if-dubbs.component.css']
})
export class CheckIfDubbsComponent implements OnInit, OnDestroy {
  private unsubscribe : Subject<void> = new Subject();
  dubbtype: string = "";
  dubbid: string ="";
  dubbstart: Date = null;
  dubbend: Date =null;
  constructor(
    private messhandler: LoginMessageHandlerService
    ,private ModuleService: ModuleService
    , private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.messhandler.DubbType
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (status: string) => {
        this.dubbtype=status;
        this.testandrun();
        this.cd.markForCheck();
      }
    );
    this.messhandler.DubbId
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (status: string) => {
        this.dubbid=status;
        this.testandrun();
        this.cd.markForCheck();
      }
    );
    this.messhandler.DubbStart
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (status: Date) => {
        this. dubbstart=status;
        this.testandrun();
        this.cd.markForCheck();
      }
    );
    this.messhandler.DubbEnd
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (status: Date) => {
        this. dubbend=status;
        this.testandrun();
        this.cd.markForCheck();
      }
    );
  }

   private testandrun()
   {  
      if (this.dubbtype != "" && this.dubbid != "" && this.dubbstart != null && this.dubbend != null)
      {
        this.ModuleService.

      }

   }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
