import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { UploadDetailComponent } from './upload-detail/upload-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
var DocumentsModule = /** @class */ (function () {
    function DocumentsModule() {
    }
    DocumentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                UploadComponent,
                UploadDetailComponent
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule,
            ],
            exports: [
                UploadComponent,
                UploadDetailComponent
            ]
        })
    ], DocumentsModule);
    return DocumentsModule;
}());
export { DocumentsModule };
//# sourceMappingURL=documents.module.js.map