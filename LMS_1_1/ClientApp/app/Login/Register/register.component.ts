import { Component, OnInit } from '@angular/core';
import { IRegisterUser,RegisterUser } from './registeruser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:RegisterUser= new RegisterUser();

  constructor() { }

  ngOnInit() {
  }
  public onRegister()
  {

  }
}
