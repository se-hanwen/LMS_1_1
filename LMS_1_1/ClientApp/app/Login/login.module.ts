import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './Login/login.component'
import { RouterModule } from '@angular/router';
import { LoginpartialComponent } from './LoginPartial/loginpartial.component';
import { IsTeacherGuard } from '../Shared/is-teacher.guard';
import { RegisterComponent } from './Register/register.component';
import { AddStudentToCourseComponent } from './AddStudentToCourse/add_student_to_course.component';
import { ConfirmRegistedUserComponent } from './ConfirmRegistedUser/confirm-registed-user.component';
import { ManageusersComponent } from './ManageUsers/manageusers.component';
import { IsAuthenticatedGuard } from '../Shared/is-authenticated.guard';
import { EdituserComponent } from './EditUser/edituser.component';
import { DeleteuserComponent } from './DeleteUser/deleteuser.component';
import { ConfirmComponent } from './Confirm/confirm.component';

@NgModule({
  declarations: [LoginComponent
  ,LoginpartialComponent
  ,RegisterComponent
  ,AddStudentToCourseComponent
  ,ConfirmRegistedUserComponent 
  ,LoginComponent
  ,ManageusersComponent
  ,EdituserComponent
  ,DeleteuserComponent 
  ,ConfirmComponent
],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [{
          path: 'Account/Login'
         ,component: LoginComponent
      },
      {
        path: 'Account/Register'
        ,canActivate: [IsTeacherGuard] 
       , component: RegisterComponent
      },
      {
        path: 'Account/ConfirmRegistedUser'
        ,canActivate: [IsTeacherGuard] 
       , component: ConfirmRegistedUserComponent
      },
      {
        path: 'Account/ManageUsers'
        ,canActivate: [IsTeacherGuard] 
       , component: ManageusersComponent
      },
      {
        path: 'Account/Confirm'
        ,canActivate: [IsAuthenticatedGuard] 
       , component: ConfirmComponent
      },
      {
        path: 'Account/Delete/:id'
        ,canActivate: [IsTeacherGuard] 
       , component: DeleteuserComponent
      },
      {
        path: 'Account/Edit/:id'
        ,canActivate: [IsTeacherGuard] 
       , component: EdituserComponent
      },
      ]
  )
  ],
  exports: [LoginpartialComponent
  ,LoginComponent
  ]


})
export class LoginModule { }
