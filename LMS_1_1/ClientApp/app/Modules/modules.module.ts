import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModuleWithCourseIdComponent } from './Create/add-module-with-course-id.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddModuleWithCourseIdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
        [
            {
                path: 'Modules/create', component: AddModuleWithCourseIdComponent
            }
        ]
    )
  ]
})
export class ModulesModule { }
