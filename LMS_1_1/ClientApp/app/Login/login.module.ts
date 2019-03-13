import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './Login/login.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [{
          path: 'Account/Login', component: LoginComponent
      }
      ]
  )
  ]
})
export class LoginModule { }
