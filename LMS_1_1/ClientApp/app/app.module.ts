import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AddPartipantModule } from './AddPartipant/add-partipant.module';
import { NoRouteModule } from './NoRoute/no-route.module';
import {NoRouteComponent} from './NoRoute/no-route.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddPartipantModule,
    RouterModule.forRoot([
      {path: '**', component:  NoRouteComponent}
      
    ], {
      enableTracing: false // for debug
    }),
    NoRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
