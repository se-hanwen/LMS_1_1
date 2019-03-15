import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPartipantComponent } from './add-partipant.component';
import { RouterModule } from '@angular/router';
import { IsTeacherGuard } from '../Shared/is-teacher.guard';
import { FormsModule } from '@angular/forms';
var AddPartipantModule = /** @class */ (function () {
    function AddPartipantModule() {
    }
    AddPartipantModule = tslib_1.__decorate([
        NgModule({
            declarations: [AddPartipantComponent],
            imports: [
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: 'AddPartipant/:id',
                        canActivate: [IsTeacherGuard],
                        component: AddPartipantComponent }
                ])
            ],
            exports: [
                AddPartipantComponent
            ]
        })
    ], AddPartipantModule);
    return AddPartipantModule;
}());
export { AddPartipantModule };
//# sourceMappingURL=add-partipant.module.js.map