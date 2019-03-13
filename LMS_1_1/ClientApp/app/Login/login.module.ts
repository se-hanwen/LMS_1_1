import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './Login/login.component'
import { RouterModule } from '@angular/router';
import { LoginpartialComponent } from './LoginPartial/loginpartial.component';

@NgModule({
  declarations: [LoginComponent
  ,LoginpartialComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [{
          path: 'Account/Login', component: LoginComponent
      }
      ]
  )
  ],
  exports: [LoginpartialComponent]
})
export class LoginModule { }
