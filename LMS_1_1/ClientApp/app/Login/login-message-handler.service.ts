import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginMessageHandlerService {

  private useridSource = new BehaviorSubject(' ');
  userid = this.useridSource.asObservable();

  constructor() { }

  public Send(userid:string) : boolean 
  {      
    this.useridSource.next( userid==null?'': userid);
    return true;
  }
}
