import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPartipantComponent } from './add-partipant.component';
import  { RouterModule} from '@angular/router';
import { IsTeacherGuard } from '../Shared/is-teacher.guard';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddPartipantComponent],
  imports: [
    CommonModule,
    FormsModule,
    
    RouterModule.forChild(
      [{path:'AddPartipant/:id' 
      ,canActivate: [IsTeacherGuard]
      ,component: AddPartipantComponent }
    ]
    )
  ],
  exports: [
    AddPartipantComponent
  ]
})
export class AddPartipantModule { }
