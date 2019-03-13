import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
var DocumentsModule = /** @class */ (function () {
    function DocumentsModule() {
    }
    DocumentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [UploadComponent],
            imports: [
                CommonModule,
                FormsModule,
                RouterModule.forChild([{
                        path: 'documents/upload', component: UploadComponent
                    }
                ])
            ]
        })
    ], DocumentsModule);
    return DocumentsModule;
}());
export { DocumentsModule };
//# sourceMappingURL=documents.module.js.map