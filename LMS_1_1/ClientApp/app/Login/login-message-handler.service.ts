import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginMessageHandlerService {

   // To add And make choose to save
  private useridSource = new BehaviorSubject(' ');
  userid = this.useridSource.asObservable();

  // to 
  private HasChoosedCoursesSource = new BehaviorSubject(false);
  HasChoosedCourses = this.HasChoosedCoursesSource.asObservable();

  private IsteacherSource = new BehaviorSubject(false);
  Isteacher = this.IsteacherSource.asObservable();

  constructor() { }

  public SendUserId(userid:string) : boolean 
  {      
    this.useridSource.next( userid==null?'': userid);
    return true;
  }

  public SendHasChoosedCourses(status:boolean) : boolean 
  {      
    this.HasChoosedCoursesSource.next( status==null?false: status);
    return true;
  }

  public SendIsteacher(status:boolean) : boolean 
  {      
    this.IsteacherSource.next( status==null?false: status);
    return true;
  }
}
