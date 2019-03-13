import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { RouterModule } from '@angular/router';
import { PartipantListComponent } from '../PartipantList/partipant-list.component';
import { detailList } from './detail_list/detail_list.component';
@NgModule({
    declarations: [
        CourseListComponent,
        CourseDetailComponent,
        CreateCourseComponent,
        PartipantListComponent,
        detailList
    ],
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(
          [{
              path: 'courses', component: CourseListComponent
          },
              {
                  path: 'courses/create', component: CreateCourseComponent
              },
              {
                  path: 'courses/:id', component: CourseDetailComponent
              }
          ]
      )
  ]
})
export class CoursesModule { }
