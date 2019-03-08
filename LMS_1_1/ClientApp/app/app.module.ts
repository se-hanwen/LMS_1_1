import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AddPartipantModule } from './AddPartipant/add-partipant.module';
import { NoRouteModule } from './NoRoute/no-route.module';
import {NoRouteComponent} from './NoRoute/no-route.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AddPartipantModule,
    RouterModule.forRoot([
        {
            path: 'courses', component: CourseListComponent
        },
        {
            path: 'courses:id', component: CourseDetailComponent
        },
        {
            path: '**', component: NoRouteComponent
        }
      
    ], {
      enableTracing: false // for debug
    }),
      NoRouteModule,
      HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
