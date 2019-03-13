import { Component, OnInit } from '@angular/core';	
import { IModule } from '../../courses/course-list/course';	
import { ActivatedRoute } from '@angular/router';	

 @Component({	
  selector: 'app-add-module-with-course-id',	
  templateUrl: './add-module-with-course-id.component.html',	
  styleUrls: ['./add-module-with-course-id.component.css']	
})	
export class AddModuleWithCourseIdComponent implements OnInit {	

   Module: IModule;	
  CourseId: string ="";	
  constructor(private route: ActivatedRoute) { }	

   ngOnInit() {	
    this.CourseId = this.route.snapshot.paramMap.get('id');	
  }	

 }