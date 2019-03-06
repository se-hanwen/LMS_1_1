import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPartipantComponent } from './add-partipant.component';
import  { RouterModule} from '@angular/router';



@NgModule({
  declarations: [AddPartipantComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{path:'Angular/AddPartipant/:id' 
      
      ,component: AddPartipantComponent }
    ]
    )
  ],
  exports: [
    AddPartipantComponent
  ]
})
export class AddPartipantModule { }
