import { Component, OnInit } from '@angular/core';
import { IRegisterUser,RegisterUser } from './registeruser';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:RegisterUser= new RegisterUser();
  errorMessage: string;
  courseForm: FormGroup;
  
  constructor(private db: AuthService
    , private router: Router) { }

  ngOnInit() {
  }

  public onRegister()
  {

  }
}
