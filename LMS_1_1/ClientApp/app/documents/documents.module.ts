import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadComponent],
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(
        [  {
              path: 'documents/upload', component: UploadComponent
          }
        ]
      )


  ]
})
export class DocumentsModule { }
