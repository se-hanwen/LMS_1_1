import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPartipantComponent } from './add-partipant.component';
import { RouterModule } from '@angular/router';
var AddPartipantModule = /** @class */ (function () {
    function AddPartipantModule() {
    }
    AddPartipantModule = tslib_1.__decorate([
        NgModule({
            declarations: [AddPartipantComponent],
            imports: [
                CommonModule,
                RouterModule.forChild([{ path: 'AddPartipant/:id',
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