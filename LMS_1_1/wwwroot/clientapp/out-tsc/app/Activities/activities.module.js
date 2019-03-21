import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddActivitiesWithModulIdComponent } from './Create/add-activities-with-modul-id.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocumentsModule } from '../documents/documents.module';
import { RouterModule } from '@angular/router';
import { IsTeacherGuard } from '../Shared/is-teacher.guard';
import { ModulesModule } from 'ClientApp/app/Modules/modules.module';
import { EditComponent } from '../Activities/edit/edit.component';
import { ActivityDeleteComponent } from './activity-delete/activity-delete.component';
var ActivitiesModule = /** @class */ (function () {
    function ActivitiesModule() {
    }
    ActivitiesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AddActivitiesWithModulIdComponent,
                EditComponent,
                ActivityDeleteComponent
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                DocumentsModule,
                ModulesModule,
                RouterModule.forChild([
                    {
                        path: 'Activity/create',
                        canActivate: [IsTeacherGuard],
                        component: AddActivitiesWithModulIdComponent
                    },
                    {
                        path: 'Activity/edit/:id',
                        canActivate: [IsTeacherGuard],
                        component: EditComponent
                    },
                    {
                        path: 'Activity/delete/:id',
                        canActivate: [IsTeacherGuard],
                        component: ActivityDeleteComponent
                    }
                    /*,  {
                         path: 'Modules/delete/:id'
                         , canActivate: [IsTeacherGuard]
                         , component: ModuleDeleteComponent
                     }*/
                ])
            ]
        })
    ], ActivitiesModule);
    return ActivitiesModule;
}());
export { ActivitiesModule };
//# sourceMappingURL=activities.module.js.map