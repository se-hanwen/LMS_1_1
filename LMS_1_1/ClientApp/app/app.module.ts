import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddPartipantModule } from './AddPartipant/add-partipant.module';
import { NoRouteModule } from './NoRoute/no-route.module';
import { NoRouteComponent } from './NoRoute/no-route.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesModule } from './Courses/courses.module';
import { NavbarModule } from './Navbar/navbar.module';
import { LoginModule } from './Login/login.module';
import { ModulesModule } from './Modules/modules.module';
//import { LoginpartialComponent } from './Login/LoginPartial/loginpartial.component';


@NgModule({
  declarations: [
    AppComponent

  ],
    imports: [
    FormsModule,
    BrowserModule,
    AddPartipantModule,
    CoursesModule,
   
    RouterModule.forRoot([
        
        {
            path: '**', component: NoRouteComponent
        }
      
    ], {
      enableTracing: false // for debug
    }),
      NoRouteModule,
      HttpClientModule,
      NavbarModule,
      LoginModule,
      ModulesModule,
     
   
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
