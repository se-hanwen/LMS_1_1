import { Component, OnInit } from '@angular/core';

import { ICourse } from 'ClientApp/app/Courses/course';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'add_student_to_course',
  templateUrl: './add_student_to_course.component.html',
  styleUrls: ['./add_student_to_course.component.css']
})
export class AddStudentToCourseComponent implements OnInit {
  private test:string ="";
  pageTitle: string = "";
  BlackList: ICourse[] =[];
  private _ChooseFrom: ICourse[] =[];
  get ChooseFrom(): ICourse[]  {
    return this._ChooseFrom;
  }
  set ChooseFrom(value: ICourse[]) {
    this._ChooseFrom = value;

  }


  private _Choosed:ICourse[] =[];
  get Choosed(): ICourse[]  {
    return this._Choosed;
  }
  set Choosed(value: ICourse[]) {
    this._Choosed = value;

  }

  userid: string;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
   // this.performFilter(this.listFilter)
  }

  constructor(private PartipantService: PartipantService, private route:Router) { }

  ngOnInit() {
   // this.userid= this.route.snapshot.paramMap.get('id');
   // getfrom save on regsiteruser
  this.PartipantService.GetCoursesOff(this.userid).subscribe
  (
    Choose=> this.ChooseFrom=Choose 
  );
  this.PartipantService.GetCoursesOn(this.userid).subscribe
  (
    Choosed=>
      this.Choosed=Choosed 
  );

  this.PartipantService.GetUserName(this.userid).subscribe
  (
    UserName => this.pageTitle=UserName.value.name
  );
  
  }

  public chooseCourse(corseid : string) : void
  {

      const keyin=this.ChooseFrom.findIndex(cu => cu.id.toString()==corseid );
      if(keyin == -1) throwError;
      const course=this.ChooseFrom.splice(+keyin,1);
      this.Choosed.push(course[0]);
      if(this.Choosed.length>1)
      {
        this.Choosed.sort(function(a,b)
       {
        const FirstNameA=a.name.toLocaleUpperCase();
        const FirstNameB=b.name.toLocaleUpperCase();
        if (FirstNameA < FirstNameB)
            return -1;
        if (FirstNameA > FirstNameB)
             return 1;
        return 0;
      }
      );
    }
  }

  public uunChooseCourse(corseid : string) : void
  {
      const keyin=this.Choosed.findIndex(cu => cu.id.toString()==corseid);
      if(keyin == -1) throwError;
      const course=this.Choosed.splice(+keyin,1);
      this.ChooseFrom.push(course[0]);
      if(this.ChooseFrom.length>1)
      {
        this.Choosed.sort(function(a,b)
       {
        const FirstNameA=a.name.toLocaleUpperCase();
        const FirstNameB=b.name.toLocaleUpperCase();
        if (FirstNameA < FirstNameB)
            return -1;
        if (FirstNameA > FirstNameB)
             return 1;
        return 0;
      }
        );
      }
  }
  public SaveCourses()
  {

    this.PartipantService.SaveCourses(this.userid, this._Choosed).subscribe();
    //this.router.navigate(['/courses', this.courseid]);
  }

  private performFilter(FilterBy: string): void
  {
    let l1=this.BlackList.length, i1:number;
    for(i1=0;i1<l1;i1++)
    { // new filter => reset before applying filter
       let temp=this.BlackList.pop();
       this.ChooseFrom.push(temp);

    }
    if(FilterBy != "")
    {
      let l2= this.ChooseFrom.length, i2:number;

      for(i2=0;i2<l2;i2++)
      {
        if(this.ChooseFrom[i2].name.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase())==-1 
        )
        {
          let user=this.ChooseFrom.splice(+i2,1);
          this.BlackList.push(user[0]); // I Know there is just one hit cause key is scalar
          i2--; // since one is gone...
          l2--;// since one is gone...
        }
      }

        if(this.ChooseFrom.length>1)
        {
          this.Choosed.sort(function(a,b)
          {
           const FirstNameA=a.name.toLocaleUpperCase();
           const FirstNameB=b.name.toLocaleUpperCase();
           if (FirstNameA < FirstNameB)
               return -1;
           if (FirstNameA > FirstNameB)
                return 1;
           return 0;
         }
           );
        }
      
    }
  }


}
