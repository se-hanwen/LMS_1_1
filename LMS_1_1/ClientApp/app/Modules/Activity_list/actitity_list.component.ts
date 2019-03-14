import { IModule } from 'ClientApp/app/Courses/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: "activity_list",
    templateUrl: "actitity_list.component.html",
    styleUrls:[]
})

export class ActitityListComponent implements OnInit {
  module: IModule;
  errorMessage: string;
  @Input()   moduleid: string;


  isTeacher: boolean=false;
 constructor(private route: ActivatedRoute,
     private CourseService: CourseService
     , private AuthService : AuthService
     ) 
     { }
 
 ngOnInit() {
     this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);

     //getModulAndActivitybyId(Moduleid: string) : Observable<IModule>
     this.CourseService.getModulAndActivitybyId(this.moduleid).subscribe(
      module => {
                 this.module = module;
             },
             error => this.errorMessage = <any>error
         );
 }

 public TogggelCollapse(aid: string): void
 {
      if(this.module.activities.find(m => m.id.toString()==aid).isExpanded ==" show")
     {
           this.module.activities.find(m => m.id.toString()==aid).isExpanded="";
           // add here for filelist for activity
         /*  if (this.savesubs.find( t => t[0]==mid))
           {

               this.savesubs.find( t => t[0]==mid)[1].unsubscribe();
               this.savesubs.splice(this.savesubs.indexOf(this.savesubs.find( t => t[0]==mid)),1);
           }
*/
     }
      else
     {
        this.module.activities.find(m => m.id.toString()==aid).isExpanded=" show";
       /* let temp=this.CourseService.getActivitybymodulId(mid).subscribe(
                 activities=>
                 {
                     this.course.modules.find(m => m.id.toString()==mid).activities=activities;
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
         */
     }
 }


}