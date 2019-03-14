import { Component, OnInit, Input } from "@angular/core";
import { ICourse } from '../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';

@Component({
    selector: "detail_list",
    templateUrl: "detail_list.component.html",
    styleUrls:[]
})

export class detailList implements OnInit{

     course: ICourse;
     errorMessage: string;
     @Input()   courseid: string;

     isTeacher: boolean;
    constructor(private route: ActivatedRoute,
        private CourseService: CourseService
        , private AuthService : AuthService
        ) 
        { }
    
    ngOnInit() {
        this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);
        this.CourseService.getCourseAllById(this.courseid).subscribe(
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
        }
         else
        {
           this.course.modules.find(m => m.id.toString()==mid).isExpanded=" show";
        }
    }

    public courseTitle: "C#";
    public startDate: "2019.01.02 10:00";
    public description: "There are no external authentication services configured. See this article for details on setting up this ASP.NET application to support logging in via external services.";
    public coulist = [
        {
            Name: "C# Basic",
            StartDate: "2019.01.02 10:00",
            Description: "A basic course of C#",
            Modules: [
                {
                    Name: "C# module 1",
                    StartDate: "2019.01.02 10:00",
                    Description: "Module 1 of C#"
                },
                {
                    Name: "C# module 2",
                    StartDate: "2019.01.02 10:00",
                    Description: "Module 2 of C#"
                }
            ]
        },
        {
            Name: "C# Advanced",
            StartDate: "2019.01.03 10:00",
            Description: "A follow on course of C#",
            Modules: [
                {
                    Name: "C# module 3",
                    StartDate: "2019.01.03 10:00",
                    Description: "Module 3 of C#"
                },
                {
                    Name: "C# module 4",
                    StartDate: "2019.01.03 10:00",
                    Description: "Module 4 of C#"
                }
            ]
        }
    ];

}