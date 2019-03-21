import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IActivity } from 'ClientApp/app/Courses/course';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-activity-delete',
  templateUrl: './activity-delete.component.html',
  styleUrls: ['./activity-delete.component.css']
})
export class ActivityDeleteComponent implements OnInit {

    private act_delete: IActivity;
    private unsubscribe: Subject<void> = new Subject();

    constructor(private route: ActivatedRoute,
        private moduleService: ModuleService,
        private router: Router,
        private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
