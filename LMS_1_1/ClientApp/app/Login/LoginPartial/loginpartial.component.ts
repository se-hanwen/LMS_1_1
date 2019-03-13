import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'ClientApp/app/auth/auth.service';

@Component({
  selector: 'loginpartial',
  templateUrl: './loginpartial.component.html',
  styleUrls: ['./loginpartial.component.css']
})
export class LoginpartialComponent implements OnInit, OnChanges {
  
  isSignedIn: boolean
  isTeacher: boolean
  firstName: string;
  lastName: string;
  constructor(private AuthService:AuthService) { }

  ngOnInit() {
    this.isSignedIn=this.AuthService.isAuthenticated();
    this.isTeacher=this.AuthService.IsTeacher();
    this.firstName=this.AuthService.FirstName;
    this.lastName=this.AuthService.LastName;
  }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.isSignedIn=this.AuthService.isAuthenticated();
    this.isTeacher=this.AuthService.IsTeacher();
    this.firstName=this.AuthService.FirstName;
    this.lastName=this.AuthService.LastName;
  }

  public logout()
  {
    this.AuthService.logout();
  }
}
