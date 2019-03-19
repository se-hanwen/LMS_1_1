import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModuleWithCourseIdComponent } from './Create/add-module-with-course-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActitityListComponent } from './Activity_list/actitity_list.component';
import { IsAuthenticatedGuard } from '../Shared/is-authenticated.guard';
import { ModulDetailsComponent } from './Details/details.component';
import { DocumentsModule } from '../documents/documents.module';


@NgModule({
  declarations: [
    AddModuleWithCourseIdComponent,
    ActitityListComponent,
      ModulDetailsComponent,
      
     
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
      FormsModule,
      DocumentsModule,
    RouterModule.forChild(
        [
            {
                path: 'Modules/create', component: AddModuleWithCourseIdComponent
            }  , 
          {
              path: 'Modules/:id'
              ,canActivate: [IsAuthenticatedGuard]
              ,component: ModulDetailsComponent
          }
        ]
    )
  ]
})
export class ModulesModule { }
