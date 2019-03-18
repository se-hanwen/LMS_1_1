import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../Navbar/navbar.component';
import { LoginModule } from '../Login/login.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
