import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginMessageHandlerService {

  private startstring?:string="";
   // To add And make choose to save
  private useridSource = new BehaviorSubject<string>(this.startstring);
  userid = this.useridSource.asObservable();

  // to 
  private HasChoosedCoursesSource = new BehaviorSubject<boolean>(false);
  HasChoosedCourses = this.HasChoosedCoursesSource.asObservable();

  private IsteacherSource = new BehaviorSubject<boolean>(false);
  Isteacher = this.IsteacherSource.asObservable();

   
  private HasSavedCouresSource = new BehaviorSubject<boolean>(false);
  HasSavedCoures = this.HasSavedCouresSource.asObservable();


  private CourseSavedSource = new BehaviorSubject<string>(this.startstring);
  CourseSaved = this.CourseSavedSource.asObservable();


  private ConfirmSource = new BehaviorSubject<string>(this.startstring);
  Confirm = this.ConfirmSource.asObservable();

 private CurrUserAuthSource = new BehaviorSubject<boolean>(false);
 CurrUserAuth = this.CurrUserAuthSource.asObservable();

 private CurrUserTeacherSource = new BehaviorSubject<boolean>(false);
 CurrUserTeacher = this.CurrUserTeacherSource.asObservable();

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

  public SendCurrUserAuth(status:boolean) : boolean 
  {      
    this.CurrUserAuthSource.next( status==null?false: status);
    return true;
  }

  public SendCurrUserTeacher(status:boolean) : boolean 
  {      
    this.CurrUserTeacherSource.next( status==null?false: status);
    return true;
  }
}
