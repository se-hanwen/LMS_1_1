import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IModule } from '../../courses/course';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { LoginMessageHandlerService } from 'ClientApp/app/Login/login-message-handler.service';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { takeUntil } from 'rxjs/operators';
import { ModuleService } from '../module.service';


 @Component({	
  selector: 'app-add-module-with-course-id',	
  templateUrl: './add-module-with-course-id.component.html',	
  styleUrls: ['./add-module-with-course-id.component.css']	
})	
export class AddModuleWithCourseIdComponent implements OnInit, OnDestroy  {	
  private unsubscribe : Subject<void> = new Subject();
// get course set up coursestatdate
   Module: IModule;	
   coursestartdate: Date;
  CourseId: string ="";	
  errorMessage="";
  constructor(private route: ActivatedRoute
    ,private db: AuthService
    , private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService
    ,private CourseService: CourseService
    ,private ModuleService: ModuleService
    ,  private router: Router
    ) { }	

   ngOnInit() {	
    this.CourseId = this.route.snapshot.paramMap.get('id');	
    this.messhandler.CourseStartDate
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      status => {
        this.coursestartdate=status;
        this.cd.markForCheck();
      }
    )
  }	

public Create(theForm):void
{
  this.errorMessage = "";
  this.ModuleService.CreateModule(this.Module)
  .pipe(takeUntil(this.unsubscribe))
  .subscribe( status =>
    {
      if(status)
      {
        this.errorMessage="Module "+this.Module.name+" saved"

      }
      this.cd.markForCheck();
    }
    ,err =>  this.errorMessage = <any>err
    
    )
}
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

 }