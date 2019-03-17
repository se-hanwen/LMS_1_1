import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { ICourse } from 'ClientApp/app/Courses/course';
import { PartipantService } from 'ClientApp/app/AddPartipant/partipant.service';
import { Router } from '@angular/router';
import { throwError, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginMessageHandlerService } from '../login-message-handler.service';

@Component({
  selector: 'add_student_to_course',
  templateUrl: './add_student_to_course.component.html',
  styleUrls: ['./add_student_to_course.component.css']
})
export class AddStudentToCourseComponent implements OnInit, OnDestroy  {
  private test:string ="";

  private unsubscribe : Subject<void> = new Subject();

  pageTitle: string = "";
  BlackList: ICourse[] =[];
  private _ChooseFrom: ICourse[] =[];
  Saveoff: Subscription= null;
  SaveOn: Subscription= null;
  Saveusername: Subscription=null;
  isTeacher: boolean=false;
  CoursesChoosed: boolean=false;
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

  userid: string=null;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
   // this.performFilter(this.listFilter)
  }

  constructor(private PartipantService: PartipantService, private route:Router
    ,private cd: ChangeDetectorRef
    ,private messhandler: LoginMessageHandlerService
    ) { }

  ngOnInit() {
   // this.userid= this.route.snapshot.paramMap.get('id');
   // getfrom save on regsiteruser

   this.messhandler.Isteacher
   .pipe(takeUntil(this.unsubscribe))
   .subscribe(
     status => {
       this.isTeacher=status
       this.cd.markForCheck();
     }
   )

    this.messhandler.userid
    .pipe(takeUntil(this.unsubscribe))
    .subscribe
    (
      (resp: string) =>
      {
       
          if(resp != null && resp != "")
          {
            this.userid=resp;
            if(!this.isTeacher && this.CoursesChoosed)
            {
                this.SaveCourses();
            }
            else
            {
             
              if(this.Saveoff != null)
              {
                this.Saveoff.unsubscribe;
              }
              this.Saveoff=this.PartipantService.GetCoursesOff(this.userid)
              .pipe(takeUntil(this.unsubscribe))
              .subscribe
              (
                Choose=> { 
                  this.ChooseFrom=Choose;
                  this.cd.markForCheck();
                } 
              );

              if(this.SaveOn != null)
              {
                this.SaveOn.unsubscribe;
              }
              this.Saveoff=this.PartipantService.GetCoursesOff(this.userid)
              .pipe(takeUntil(this.unsubscribe))
              .subscribe
              (
                Choose=> { 
                  this.ChooseFrom=Choose;
                  this.cd.markForCheck();
                } 
              );
              this.SaveOn=this.PartipantService.GetCoursesOn(this.userid)
              .pipe(takeUntil(this.unsubscribe))
              .subscribe
              (
                Choosed=>{
                  this.Choosed=Choosed;
                  this.cd.markForCheck();
                }
              );
              if(this.Saveusername != null)
              {
                this.Saveusername.unsubscribe();
              }
              this.Saveusername=this.PartipantService.GetUserName(this.userid)
              .pipe(takeUntil(this.unsubscribe))
              .subscribe
              (
                UserName => {
                  if(UserName != null)
                  {
                    this.pageTitle=UserName.value.name;
                  }
                  this.cd.markForCheck();
                }
              );
              this.cd.markForCheck();
            }
          }
      }
    )
    this.Saveoff=this.PartipantService.GetCoursesOff(this.userid)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe
    (
      Choose=> { 
        this.ChooseFrom=Choose;
        this.cd.markForCheck();
      } 
    );
    this.SaveOn=this.PartipantService.GetCoursesOn(this.userid)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe
    (
      Choosed=>{
        this.Choosed=Choosed;
        this.cd.markForCheck();
      }
    );




  }

  public chooseCourse(corseid : string) : void
  {

    if(!this.CoursesChoosed)
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
  }

  public unChooseCourse(corseid : string) : void
  {
    if(!this.CoursesChoosed)
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
  }
  public SaveCourses()
  {

    this.PartipantService.SaveCourses(this.userid, this._Choosed)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      success =>
      {
        let savedcourses: string="";
        let workstart=false;
        for(let work of this._Choosed)
        {
          savedcourses=savedcourses+(workstart?",":"")+ work.name;
          workstart=true;
        }

        this.messhandler.SendHasSavedCoures(true);
        this.messhandler.SendCourseSaved(savedcourses);

        this.cd.markForCheck();
      }

    );
    //this.router.navigate(['/courses', this.courseid]);
  }

  public ChooseCourses()
  {
      this.CoursesChoosed = ! this.CoursesChoosed ;
       this.messhandler.SendHasChoosedCourses(this.CoursesChoosed);
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
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
