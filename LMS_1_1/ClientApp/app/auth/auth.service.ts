import { Injectable, OnDestroy } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, takeUntil } from 'rxjs/operators';
import { User } from '../Login/login';
import { tokenData } from './tokenData';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { RegisterUser } from '../Login/Register/registeruser';
import { ICourseNameData } from '../AddPartipant/partipant';

@Injectable(
  {
    providedIn: 'root'
})
export class AuthService implements  OnDestroy 
{

  private unsubscribe : Subject<void> = new Subject();  
  // ...public jwtHelper: JwtHelperService,


   private tokenData: tokenData=new tokenData();

private tokenSource = new BehaviorSubject(' ');
token = this.tokenSource.asObservable();

private tokenExpirationSource = new BehaviorSubject(new Date());
tokenExpiration = this.tokenExpirationSource.asObservable();

private firstNameSource = new BehaviorSubject(' ');
firstName = this.firstNameSource.asObservable();

private lastNameSource = new BehaviorSubject(' ');
lastName = this.lastNameSource.asObservable();

/*
private useridSource = new BehaviorSubject(' ');
userid = this.useridSource.asObservable();
*/
/*private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
private _isAuthenticated = this.isAuthenticatedSource.asObservable();*/
get isAuthenticated(): boolean
{
  return this.checkisAuthenticated(this.tokenData.token,this.tokenData.tokenExpiration);
}

/*private isTeacherSource = new BehaviorSubject<boolean>(false);
private _isTeacher = this.isTeacherSource.asObservable();*/

get isTeacher()
{
  return this.checkisAuthenticated(this.tokenData.token,this.tokenData.tokenExpiration)?this.checkIsTeacher(this.tokenData.isTeacher):false;
}


RealisAuthenticated : boolean = false;
RealisTeacher : boolean = false;

constructor(private http: HttpClient,
) {
  /*this.isAuthenticated
  .pipe(takeUntil(this.unsubscribe))
  .subscribe( i => {
    this.RealisAuthenticated=i;
//    this.cd.markForCheck();
  });
  this.isTeacher
  .pipe(takeUntil(this.unsubscribe))
  .subscribe(i => {
      this.RealisTeacher=i;
   //   this.cd.markForCheck();
  });*/
  this.token
  .pipe(takeUntil(this.unsubscribe))
  .subscribe(i =>{ 
      this.Realtoken=i;
  //    this.cd.markForCheck();
  });
}
/*
ngOnInit(): void {
  this.isAuthenticated.subscribe( i => this.RealisAuthenticated=i);
  this.isTeacher.subscribe(i => this.RealisTeacher=i);
}*/

/*
  get token(): Observable<string> {
    return this.tokenData.token
  }
  

  get tokenExpiration():Date
  {
    return this.tokenData.tokenExpiration;
  }


  get FirstName():string
  {
    return this.tokenData.firstName;
  }

  get LastName():string
  {
    return this.tokenData.lastName;
  }
  get Userid():string
  {
    return this.tokenData.userid;
  }
  */
 private url:string="https://localhost:44396";

  private _isTeacher:string="";
  private Realtoken: string="";
   
  private getAuthHeader() : HttpHeaders
  {
    return  new HttpHeaders({ "Authorization": "Bearer " + this.Realtoken });
  }
  
  public login(creds:User) : Observable<boolean> | undefined {
    return this.http.post(this.url+"/account/createtoken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
         
          this.tokenSource.next(tokenInfo.token==null?'':tokenInfo.token);
          this.tokenExpirationSource.next(tokenInfo.tokenExpiration);
          this.firstNameSource.next(tokenInfo.firstName);
          this.lastNameSource.next(tokenInfo.lastName);
      //    this.useridSource.next(tokenInfo.userid);
         // this.isAuthenticatedSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration));
        //  this.isTeacherSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration)?this.checkIsTeacher(tokenInfo.isTeacher):false)


          

          this.tokenData.token = tokenInfo.token;
          this.tokenData.tokenExpiration = tokenInfo.expiration;
          this.tokenData.isTeacher=tokenInfo.isTeacher;
          this.tokenData.firstName=tokenInfo.firstName;
          this.tokenData.lastName=tokenInfo.lastName;
          this.tokenData.userid=tokenInfo.userid;
          return true;
        })
        
        );
  }

     //  
  /*   public IsAuthenticated(): boolean
     {
       return this.RealisAuthenticated;
     } 

     public IsTeacher(): boolean
     {
       return this.RealisTeacher;
     } 
*/
 public logout(): void
 {
    this.tokenData=new tokenData();
    this.tokenSource.next('');
    this.tokenExpirationSource.next(this.tokenData.tokenExpiration);
    this.firstNameSource.next('');
    this.lastNameSource.next('');
  //  this.isAuthenticatedSource.next(false);
  //  this.isTeacherSource.next(false)
 }

  public register(registeruser: RegisterUser) : Observable<ICourseNameData> | undefined
  {
    return this.http.post(this.url+"/account/RegisterNewUser", registeruser
    ,{headers:this.getAuthHeader()}
    )
    .pipe(
      map((response: any) => {
      return response;
    })
    );
    
  }


  private checkisAuthenticated(token : string, tokenExpiration : Date ) :boolean {
    return !(token.length == 0 && tokenExpiration > new Date());
  }

  
   private checkIsTeacher(isTeacher: string): boolean 
  {

      if(isTeacher == "Teacher")
          return true;
        return false;

  }
 
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}