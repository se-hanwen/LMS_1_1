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
  ChooseFrom: IPartipant[] =[];
  Choosed:IPartipant[] =[];
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
    this.PartipantService.GetStudentsOff(this.courseId).subscribe
    (
      Choose=> this.ChooseFrom=Choose 
    )
    this.PartipantService.GetStudentsOn(this.courseId).subscribe
    (
      Choosed=>
      { 
        this.Choosed=Choosed; 
        this.PartipantService.Choosed=this.Choosed;
      }
    )
    
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
    this.PartipantService.SaveStudents(this.courseId).subscribe();

  }

  private performFilter(FilterBy: string): void
  {
    for(let key in this.BlackList)
    { // nwe filter => reset before applying filter
       let temp=this.BlackList.pop();
       this.ChooseFrom.push(temp);
    }
    if(FilterBy != "")
    {
      for(let key in this.ChooseFrom)
      {
        if(this.ChooseFrom[key].firstName.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase())==-1 &&
        this.ChooseFrom[key].lastName.toLocaleUpperCase().indexOf(FilterBy.toLocaleUpperCase())==-1
        )
        {
          let user=this.ChooseFrom.splice(+key,1);
          this.BlackList.push(user[0]); // I Know there is just one hit cause key is scalar
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
