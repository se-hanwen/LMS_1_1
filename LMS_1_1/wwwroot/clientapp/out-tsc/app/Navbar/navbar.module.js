import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../Navbar/navbar.component';
import { LoginModule } from '../Login/login.module';
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib_1.__decorate([
        NgModule({
            declarations: [NavbarComponent],
            imports: [
                CommonModule,
                LoginModule
            ],
            exports: [NavbarComponent]
        })
    ], NavbarModule);
    return NavbarModule;
}());
export { NavbarModule };
//# sourceMappingURL=navbar.module.js.map