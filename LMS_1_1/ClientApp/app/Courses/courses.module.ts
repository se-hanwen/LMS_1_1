import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { RouterModule } from '@angular/router';
import { PartipantListComponent } from '../PartipantList/partipant-list.component';
import { detailList } from './detail_list/detail_list.component';
import { SharedModule } from '../Shared/shared.module';
import { IsAuthenticatedGuard } from '../Shared/is-authenticated.guard';
import { IsTeacherGuard } from '../Shared/is-teacher.guard';

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
      SharedModule,
      RouterModule.forChild(
          [{
              path: 'courses' 
              ,canActivate: [IsAuthenticatedGuard]
              ,component: CourseListComponent
          },
              {
                  path: 'courses/create'
                  ,canActivate: [IsTeacherGuard] 
                 , component: CreateCourseComponent
              },
              {
                  path: 'courses/:id'
                  ,canActivate: [IsAuthenticatedGuard]
                  ,component: CourseDetailComponent
              }
          ]
      )
  ]
})
export class CoursesModule { }
