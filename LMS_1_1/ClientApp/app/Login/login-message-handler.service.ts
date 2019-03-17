import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginMessageHandlerService {

  private startstring?:string="";
   // To add And make choose to save
  private useridSource = new BehaviorSubject(this.startstring);
  userid = this.useridSource.asObservable();

  // to 
  private HasChoosedCoursesSource = new BehaviorSubject(false);
  HasChoosedCourses = this.HasChoosedCoursesSource.asObservable();

  private IsteacherSource = new BehaviorSubject(false);
  Isteacher = this.IsteacherSource.asObservable();

   
  private HasSavedCouresSource = new BehaviorSubject(false);
  HasSavedCoures = this.HasSavedCouresSource.asObservable();


  private CourseSavedSource = new BehaviorSubject(this.startstring);
  CourseSaved = this.CourseSavedSource.asObservable();


  private ConfirmSource = new BehaviorSubject(this.startstring);
  Confirm = this.ConfirmSource.asObservable();


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

  public SendHasSavedCoures(status:boolean) : boolean 
  {      
    this.HasSavedCouresSource.next( status==null?false: status);
    return true;
  }

  public SendConfirm(arg: string): boolean {
    this.ConfirmSource.next( arg==null?'': arg);
    return true;
  }

  public SendCourseSaved(arg?: string): boolean {
    this.CourseSavedSource.next(arg);
    return true;
  }
}
