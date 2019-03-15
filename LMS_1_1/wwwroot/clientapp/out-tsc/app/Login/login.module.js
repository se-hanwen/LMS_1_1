import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/login.component';
import { RouterModule } from '@angular/router';
import { LoginpartialComponent } from './LoginPartial/loginpartial.component';
import { IsTeacherGuard } from '../Shared/is-teacher.guard';
import { RegisterComponent } from './Register/register.component';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib_1.__decorate([
        NgModule({
            declarations: [LoginComponent,
                LoginpartialComponent,
                RegisterComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                RouterModule.forChild([{
                        path: 'Account/Login', component: LoginComponent
                    },
                    {
                        path: 'Account/Register',
                        canActivate: [IsTeacherGuard],
                        component: RegisterComponent
                    }
                ])
            ],
            exports: [LoginpartialComponent]
        })
    ], LoginModule);
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=login.module.js.map