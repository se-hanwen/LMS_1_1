import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginMessageHandlerService } from '../../Login/login-message-handler.service';
import { ModuleService } from '../module.service';
import { takeUntil } from 'rxjs/operators';
import { IDubbParas, DubbParas } from './DubbParas';

@Component({
  selector: 'check-if-dubbs',
  templateUrl: './check-if-dubbs.component.html',
  styleUrls: ['./check-if-dubbs.component.css']
})
export class CheckIfDubbsComponent implements OnInit, OnDestroy {
  private unsubscribe : Subject<void> = new Subject();
  paras :IDubbParas =new DubbParas() ;
  Warning : string ="";
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
        this.paras.dubbtype=status;
        this.testandrun();
        this.cd.markForCheck();
      }
    );
    this.messhandler.DubbId
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (status: string) => {
        this.paras.dubbid=status;
        this.testandrun();
        this.cd.markForCheck();
      }
    );
    this.messhandler.DubbStart
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (status: Date) => {
        this.paras.dubbstart=status;
        this.testandrun();
        this.cd.markForCheck();
      }
    );
    this.messhandler.DubbEnd
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (status: Date) => {
        this.paras.dubbend=status;
        this.testandrun();
        this.cd.markForCheck();
      }
    );
  }

   private testandrun()
   {  
      if (this.paras.dubbtype != null && this.paras.dubbid != null && this.paras.dubbstart != null && this.paras.dubbend != null && this.paras.dubbtype != "" && this.paras.dubbid != "" )
      {
        this.ModuleService.CheckIfDubblett(this.paras)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
           (status: boolean) =>
           {
              if (status)
              {
                this.Warning= "There exists already "+this.paras.dubbtype+" in the selected range";
              }
              else
              {
                this.Warning="";
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
