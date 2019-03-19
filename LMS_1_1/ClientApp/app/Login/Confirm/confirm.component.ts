import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginMessageHandlerService } from '../login-message-handler.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, OnDestroy  {
  private unsubscribe : Subject<void> = new Subject();
  message: string="";
goonurl: string[]=[];
goonmess: string="";
gobackurl: string[] =[];

  constructor(private route:Router
    ,private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService) { }

  ngOnInit() {
     this.messhandler.ConfirmMessage
     .pipe(takeUntil(this.unsubscribe))
     .subscribe( mess => 
     {
       this.message=mess;
       this.cd.markForCheck();
     });
     this.messhandler.ConfirmGoOnUrl
     .pipe(takeUntil(this.unsubscribe))
     .subscribe( mess => 
      {
        this.goonurl=mess;
        this.cd.markForCheck();
      });
      this.messhandler.ConfirmGoOnMessage
      .pipe(takeUntil(this.unsubscribe))
      .subscribe( mess => 
       {
         this.goonmess=mess;
         this.cd.markForCheck();
       });
       this.messhandler.ConfirmGoBackUrl
       .pipe(takeUntil(this.unsubscribe))
       .subscribe( mess => 
        {
          this.gobackurl=mess;
          this.cd.markForCheck();
        });
  }


  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
