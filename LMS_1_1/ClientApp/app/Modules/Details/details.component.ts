import { Component, OnInit } from '@angular/core';
import { IModule } from 'ClientApp/app/Courses/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class ModulDetailsComponent implements OnInit {

  module: IModule;
  errorMessage: string;
  isTeacher: boolean;
  constructor(private route: ActivatedRoute, private CourseService: CourseService, private AuthService : AuthService) { }

  ngOnInit(): void {
      this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);
      let Modulid: string = this.route.snapshot.paramMap.get('id');
      this.CourseService.getModulAndActivitybyId(Modulid).subscribe(
          modul=> {
                  this.module = modul;
              },
              error => this.errorMessage = <any>error
          );



      
}

}
