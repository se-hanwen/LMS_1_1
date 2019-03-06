import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AddPartipantModule } from './AddPartipant/add-partipant.module';
import { NoRouteModule } from './NoRoute/no-route.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddPartipantModule,
    RouterModule.forRoot([
      {path: 'Angular\*', component: AppComponent}
      
    ], {useHash: true, 
      enableTracing: false // for debug
    }),
    NoRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
