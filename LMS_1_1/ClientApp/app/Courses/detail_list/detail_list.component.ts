import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { ICourse, course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: "detail_list",
    templateUrl: "detail_list.component.html",
    styleUrls:[]
})

export class detailList implements OnInit, OnDestroy {

     course: ICourse;
     errorMessage: string;
     @Input()   courseid: string;
     private unsubscribe : Subject<void> = new Subject();

   private savesubs: Array<[string,Subscription]>= new Array<[string,Subscription]>();
     isTeacher: boolean;
    constructor(private route: ActivatedRoute,
        private CourseService: CourseService
        , private AuthService : AuthService
        ,private cd: ChangeDetectorRef
        ) 
        { }
    
    ngOnInit() {
        this.AuthService.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( i =>{
             this.isTeacher=i;
             this.cd.markForCheck();
        }
             );


        this.CourseService.getCourseAndModulebyId(this.courseid)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
                course => {
                    this.course = course;
                    this.cd.markForCheck();
                },
                error => this.errorMessage = <any>error
            );
    }

    public TogggelCollapse(mid: string): void
    {
         if(this.course.modules.find(m => m.id.toString()==mid).isExpanded ==" show")
        {
              this.course.modules.find(m => m.id.toString()==mid).isExpanded="";
              if (this.savesubs.find( t => t[0]==mid))
              {

                  this.savesubs.find( t => t[0]==mid)[1].unsubscribe();
                  this.savesubs.splice(this.savesubs.indexOf(this.savesubs.find( t => t[0]==mid)),1);
              }

        }
         else
        {
           this.course.modules.find(m => m.id.toString()==mid).isExpanded=" show";
           let temp=this.CourseService.getActivitybymodulId(mid)
           .pipe(takeUntil(this.unsubscribe))
           .subscribe(
                    activities=>
                    {
                        this.course.modules.find(m => m.id.toString()==mid).activities=activities;
                        this.cd.markForCheck();
                    },
                    error => this.errorMessage = <any>error
                );
            if (this.savesubs.find( t => t[0]==mid))
            {
                this.savesubs.find( t => t[0]==mid)[1]=temp;
            }
            else
            {
                this.savesubs.push([mid,temp])  ;
            }
        }
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
      }
   
}