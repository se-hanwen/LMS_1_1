import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPartipant } from '../AddPartipant/partipant';

import { PartipantService } from '../AddPartipant/partipant.service';
import { Subject, pipe } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-partipant-list',
  templateUrl: './partipant-list.component.html',
  styleUrls: ['./partipant-list.component.css']
})
export class PartipantListComponent implements OnInit, OnDestroy  {
  private unsubscribe : Subject<void> = new Subject();
   users: IPartipant[];
   @Input()   courseid: string="";

  constructor(private route: ActivatedRoute, private  PartipantService: PartipantService
    ,private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.PartipantService.CourseId=this.courseid;
    this.PartipantService.GetStudentsOn()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      user=>
      { 
        this.users= user; 
        this.cd.markForCheck();
      }
    );
  }
  
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  
}
