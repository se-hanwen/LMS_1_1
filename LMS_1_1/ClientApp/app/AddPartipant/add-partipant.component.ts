import { Component, OnInit } from '@angular/core';

import { IPartipant } from './partipant';
import { ActivatedRoute, Router } from '@angular/router';
import { PartipantService } from './partipant.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'add-partipant',
  templateUrl: './add-partipant.component.html',
  styleUrls: ['./add-partipant.component.css']
})
export class AddPartipantComponent implements OnInit {

  pageTitle: string = "";
  BlackList: IPartipant[] =[];
  private _ChooseFrom: IPartipant[] =[];
  get ChooseFrom(): IPartipant[]  {
    return this._ChooseFrom;
  }
  set ChooseFrom(value: IPartipant[]) {
    this._ChooseFrom = value;

  }


  private _Choosed:IPartipant[] =[];
  get Choosed(): IPartipant[]  {
    return this._Choosed;
  }
  set Choosed(value: IPartipant[]) {
    this._Choosed = value;

  }

  courseId: string =""
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.performFilter(this.listFilter)
  }


  constructor(private route: ActivatedRoute,
    private router: Router,
    private  PartipantService: PartipantService
    ) { }

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.PartipantService.CourseId=this.courseId;
    this.PartipantService.GetStudentsOff().subscribe
    (
      Choose=> this.ChooseFrom=Choose

    
    );
    this.PartipantService.GetStudentsOn().subscribe
    (
      Choosed=>
      { 
        this.Choosed=Choosed; 
        this.PartipantService.Choosed=this.Choosed;

      }
    );
    this.PartipantService.GetCourseName().subscribe
    (
      CourseName => this.pageTitle=CourseName.value.name
    );
    
  }

  public chooseStudent(userid : string) : void
  {

      const keyin=this.ChooseFrom.findIndex(cu => cu.userid==userid);
      if(keyin == -1) throwError;
      const user=this.ChooseFrom.splice(+keyin,1);
      this.Choosed.push(user[0]);
      this.PartipantService.AddStudent(user[0]);
      if(this.Choosed.length>1)
      {
        this.Choosed.sort(function(a,b)
       {
        const FirstNameA=a.firstName.toLocaleUpperCase();
        const LastNameA=a.lastName.toLocaleUpperCase();
        const FirstNameB=b.firstName.toLocaleUpperCase();
        const LastNameB=b.lastName.toLocaleUpperCase();
          if (FirstNameA < FirstNameB)
              return -1;
          if (FirstNameA > FirstNameB)
              return 1;
          if (LastNameA < LastNameB)
              return -1;
          if (LastNameA > LastNameB)
              return 1;
          return 0;
      }
      );
    }
  }

  public unChooseStudent(userid : string) : void
  {

      const keyin=this.Choosed.findIndex(cu => cu.userid==userid);
      if(keyin == -1) throwError;
      const user=this.Choosed.splice(+keyin,1);
      this.ChooseFrom.push(user[0]);
      this.PartipantService.RemoveStudent(user[0]);
      if(this.ChooseFrom.length>1)
      {
        this.ChooseFrom.sort(function(a,b)
        {
          const FirstNameA=a.firstName.toLocaleUpperCase();
          const LastNameA=a.lastName.toLocaleUpperCase();
          const FirstNameB=b.firstName.toLocaleUpperCase();
          const LastNameB=b.lastName.toLocaleUpperCase();
            if (FirstNameA < FirstNameB)
                return -1;
            if (FirstNameA > FirstNameB)
                return 1;
            if (LastNameA < LastNameB)
                return -1;
            if (LastNameA > LastNameB)
                return 1;
            return 0;
        }
        );
      }
  }
  public SaveStudents()
  {
    this.PartipantService.SaveStudents().subscribe();

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
        if(this.ChooseFrom[i2].firstName.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase())==-1 &&
        this.ChooseFrom[i2].lastName.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase())==-1
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
          this.ChooseFrom.sort(function(a,b)
          {
          const FirstNameA=a.firstName.toLocaleUpperCase();
          const LastNameA=a.lastName.toLocaleUpperCase();
          const FirstNameB=b.firstName.toLocaleUpperCase();
          const LastNameB=b.lastName.toLocaleUpperCase();
            if (FirstNameA < FirstNameB)
                return -1;
            if (FirstNameA > FirstNameB)
                return 1;
            if (LastNameA < LastNameB)
                return -1;
            if (LastNameA > LastNameB)
                return 1;
            return 0;
          }
          );
        }
      
    }
  }

  private FixHeader(From_id: string, To_id: string, Body_from_id: string): void
   {
      let element=document.querySelector("#"+From_id).cloneNode(true);
      let temp=[], i1, i2, el, l1;
      const childs=document.querySelector("#"+From_id).children;
      l1= childs.length;
      for( i1=0; i1<l1; i1++)
      {
        temp[i1]=childs.item(i1).clientWidth;
      };
      if(element.hasChildNodes)
      {
        let elchild=element.firstChild;
        (elchild as HTMLElement).style.width==temp[0];
        let elchild2=elchild.nextSibling;
        for( i1=1; i1<l1; i1++)
        {
          (elchild2 as HTMLElement).style.width=temp[i1];
          //elchild2.childNodes.item[0].clientWidth=temp[i1];
          elchild2=elchild2.nextSibling;
        }
      }
       let tableBody_from_id=( document.querySelector("table#"+Body_from_id) as HTMLElement);
       if(tableBody_from_id != null)
       {
        tableBody_from_id.style.tableLayout="fixed";
       }
    //  ( document.querySelector("table#"+Body_from_id) as HTMLElement).style.tableLayout="fixed";
      let bodytrs=document.querySelectorAll("#"+Body_from_id+" tr");
      bodytrs.forEach(function( el2, i2)
      {
        ( document.querySelectorAll("#"+el2.id+" td")).forEach(function(el1,i1)
        {
          (el1 as HTMLElement).style.width=temp[i1];
        },el2)

      }, bodytrs);
      let to_id_elem=document.querySelector("#"+To_id);
      if(to_id_elem.hasChildNodes)
      {
        document.querySelector("#"+To_id).childNodes.forEach(function(el2, i2)
        {
            el2.remove();
        });
      };
      document.querySelector("#"+To_id).append(element);
      (document.querySelector("#"+From_id) as HTMLElement).style.display="none";
      (element as HTMLElement).style.display="Block";
  }

/*
   private sortfunction(a:IPartipant,b:IPartipant): -1|1|0
   {
    const FirstNameA=a.FirstName.toLocaleUpperCase();
    const LastNameA=a.LastName.toLocaleUpperCase();
    const FirstNameB=b.FirstName.toLocaleUpperCase();
    const LastNameB=b.LastName.toLocaleUpperCase();
    if(FirstNameA<FirstNameB)
      return -1
    if(FirstNameA>FirstNameB)  
      return 1
    if(LastNameA<LastNameB)
      return -1
    if(LastNameA>LastNameB)  
      return 1 
    return 0
  }
  */
}
