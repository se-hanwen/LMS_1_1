import { IModule } from 'ClientApp/app/Courses/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subscription, Subject } from 'rxjs';
import { OnInit, Component, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'ClientApp/app/data.service';

@Component({
    selector: "activity_list",
    templateUrl: "actitity_list.component.html",
    styleUrls:[]
})

export class ActitityListComponent implements OnInit, OnDestroy  {
  module: IModule;
  errorMessage: string;
    @Input() moduleid: string;
  
  private unsubscribe : Subject<void> = new Subject();

  isTeacher: boolean=false;
 constructor(private route: ActivatedRoute,
     private CourseService: CourseService
     , private AuthService : AuthService
     , private cd: ChangeDetectorRef
     , private data: DataService
     ) 
     { }
 
 ngOnInit() {

    this.isTeacher=this.AuthService.isTeacher;
     //this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);

     //getModulAndActivitybyId(Moduleid: string) : Observable<IModule>
     this.CourseService.getModulAndActivitybyId(this.moduleid)
     .pipe(takeUntil(this.unsubscribe))
     .subscribe(
      module => {
                 this.module = module;
                 this.cd.markForCheck();
             },
             error => this.errorMessage = <any>error
         );
 }

 public TogggelCollapse(aid: string): void
 {
      if(this.module.activities.find(a => a.id.toString()==aid).isExpanded ==" show")
     {
          this.module.activities.find(a => a.id.toString() == aid).isExpanded = "";
          this.data.getData(aid);
     }
      else
     {
        this.module.activities.find(a => a.id.toString()==aid).isExpanded=" show";
     
     }
 }
 ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  

}