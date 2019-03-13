import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModuleWithCourseIdComponent } from './Create/add-module-with-course-id.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AddModuleWithCourseIdComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                RouterModule.forChild([
                    {
                        path: 'Modules/create', component: AddModuleWithCourseIdComponent
                    }
                ])
            ]
        })
    ], ModulesModule);
    return ModulesModule;
}());
export { ModulesModule };
//# sourceMappingURL=modules.module.js.map