import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { UploadDetailComponent } from './upload-detail/upload-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
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
export class DocumentsModule { }
