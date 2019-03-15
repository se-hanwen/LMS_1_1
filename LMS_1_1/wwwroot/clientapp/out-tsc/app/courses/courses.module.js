import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { RouterModule } from '@angular/router';
import { PartipantListComponent } from '../PartipantList/partipant-list.component';
import { detailList } from './detail_list/detail_list.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
var CoursesModule = /** @class */ (function () {
    function CoursesModule() {
    }
    CoursesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                CourseListComponent,
                CourseDetailComponent,
                CreateCourseComponent,
                PartipantListComponent,
                detailList,
                CourseDeleteComponent,
                CourseEditComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                RouterModule.forChild([{
                        path: 'courses', component: CourseListComponent
                    },
                    {
                        path: 'courses/create', component: CreateCourseComponent
                    },
                    {
                        path: 'courses/:id', component: CourseDetailComponent
                    },
                    {
                        path: 'courses/delete/:id', component: CourseDeleteComponent
                    },
                    {
                        path: 'courses/edit/:id', component: CourseEditComponent
                    }
                ])
            ]
        })
    ], CoursesModule);
    return CoursesModule;
}());
export { CoursesModule };
//# sourceMappingURL=courses.module.js.map