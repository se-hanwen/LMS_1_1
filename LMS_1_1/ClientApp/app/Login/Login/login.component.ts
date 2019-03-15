import { Component, OnInit } from '@angular/core';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { User } from '../login';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user:User = new User();
   errorMessage: string = "";

  constructor(private db: AuthService
    , private router: Router
    ) { 

    }

  ngOnInit() {
    this.user.userName="";
    this.user.passWord="";
    this.user.rememberMe=false;
  }
  onLogin() {
    this.errorMessage = "";
    this.db.login(this.user)
      .subscribe(success => {
        if (success) 
            this.router.navigate(["courses"]);  
      },
         err => this.errorMessage = "Failed to login");
  }
}
