import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddPartipantModule } from './AddPartipant/add-partipant.module';
import { JwtModule } from '@auth0/angular-jwt';
//import { NoRouteModule } from './NoRoute/no-route.module';
//import { NoRouteComponent } from './NoRoute/no-route.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesModule } from './Courses/courses.module';
import { NavbarModule } from './Navbar/navbar.module';
import { LoginModule } from './Login/login.module';
import { ModulesModule } from './Modules/modules.module';
import { LoginComponent } from './Login/Login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { LoginpartialComponent } from './Login/LoginPartial/loginpartial.component';
export function tokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                FormsModule,
                BrowserModule,
                AddPartipantModule,
                CoursesModule,
                JwtModule,
                RouterModule.forRoot([
                    {
                        path: '', component: LoginComponent
                    },
                    {
                        path: '**', component: LoginComponent
                    }
                ], {
                    enableTracing: false // for debug
                }),
                // NoRouteModule,
                HttpClientModule,
                JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost'],
                        blacklistedRoutes: []
                    }
                }),
                NavbarModule,
                LoginModule,
                ModulesModule,
                AngularFontAwesomeModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map