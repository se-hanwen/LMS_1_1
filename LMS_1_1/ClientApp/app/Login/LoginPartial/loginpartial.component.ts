import { Component, OnInit} from '@angular/core';
import { AuthService } from 'ClientApp/app/auth/auth.service';

@Component({
  selector: 'loginpartial',
  templateUrl: './loginpartial.component.html',
  styleUrls: ['./loginpartial.component.css']
})
export class LoginpartialComponent implements OnInit {
  
  isAuthenticated: boolean
  isTeacher: boolean
  firstName: string;
  lastName: string;
  constructor(private AuthService:AuthService) { }

  ngOnInit() {
    this.AuthService.isAuthenticated.subscribe( i => this.isAuthenticated=i);
    this.AuthService.isTeacher.subscribe(i => this.isTeacher=i);
    this.AuthService.firstName.subscribe(fn => this.firstName=fn);
    this.AuthService.lastName.subscribe(ln => this.lastName=ln);
  }



  public logout()
  {
    this.AuthService.logout();
  }
}
