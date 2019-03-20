import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModuleWithCourseIdComponent } from './Create/add-module-with-course-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActitityListComponent } from './Activity_list/actitity_list.component';
import { IsAuthenticatedGuard } from '../Shared/is-authenticated.guard';
import { ModulDetailsComponent } from './Details/details.component';
import { DocumentsModule } from '../documents/documents.module';
import { ModuleDeleteComponent } from './module-delete/module-delete.component';
import { IsTeacherGuard } from '../Shared/is-teacher.guard';
import { CheckIfDubbsComponent } from './Check-if-dubbs/check-if-dubbs.component';
var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AddModuleWithCourseIdComponent,
                ActitityListComponent,
                ModulDetailsComponent,
                ModuleDeleteComponent,
                CheckIfDubbsComponent
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                DocumentsModule,
                RouterModule.forChild([
                    {
                        path: 'Modules/create',
                        canActivate: [IsTeacherGuard],
                        component: AddModuleWithCourseIdComponent
                    },
                    {
                        path: 'Modules/:id',
                        canActivate: [IsAuthenticatedGuard],
                        component: ModulDetailsComponent
                    },
                    {
                        path: 'Modules/delete/:id',
                        canActivate: [IsTeacherGuard],
                        component: ModuleDeleteComponent
                    }
                ])
            ],
            exports: [
                CheckIfDubbsComponent
            ]
        })
    ], ModulesModule);
    return ModulesModule;
}());
export { ModulesModule };
//# sourceMappingURL=modules.module.js.map