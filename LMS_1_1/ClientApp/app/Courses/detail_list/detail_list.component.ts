import { Component, OnInit, Input } from "@angular/core";
import { ICourse, course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "detail_list",
    templateUrl: "detail_list.component.html",
    styleUrls:[]
})

export class detailList implements OnInit{

     course: ICourse;
     errorMessage: string;
     @Input()   courseid: string;

    savesubs: Array<[string,Subscription]>= new Array<[string,Subscription]>();
     isTeacher: boolean;
    constructor(private route: ActivatedRoute,
        private CourseService: CourseService
        , private AuthService : AuthService
        ) 
        { }
    
    ngOnInit() {
        this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);


        this.CourseService.getCourseAndModulebyId(this.courseid).subscribe(
                course => {
                    this.course = course;
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
           let temp=this.CourseService.getActivitybymodulId(mid).subscribe(
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
        }
    }

   
}