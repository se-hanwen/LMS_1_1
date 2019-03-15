import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

    course: ICourse;
    errorMsg: string;

    constructor(private route: ActivatedRoute, private CourseService: CourseService, private router: Router) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get("id");
        this.CourseService.getCourseById(id).subscribe(
            tcourse => { this.course = tcourse },
            error => { this.errorMsg = <any>error; });
    }

    ConfirmedDelete() {
        this.CourseService.DeleteCourse(this.course.id).subscribe();
        this.router.navigate(['/courses']);
    }

}
