import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModuleService } from '../module.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { IModule } from 'ClientApp/app/Courses/course';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { error } from 'util';


@Component({
    selector: 'app-module-delete',
    templateUrl: './module-delete.component.html',
    styleUrls: ['./module-delete.component.css']
})
export class ModuleDeleteComponent implements OnInit {

    module_delete: IModule;
    private unsubscribe: Subject<void> = new Subject();

    constructor(private route: ActivatedRoute,
        private courseService: CourseService,
        private moduleService: ModuleService,
        private router: Router,
        private cd: ChangeDetectorRef) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get("id");
        this.courseService.getModulAndActivitybyId(id).pipe(takeUntil(this.unsubscribe))
            .subscribe(
                tmodule => {
                    this.module_delete = tmodule;
                    this.cd.markForCheck();
                },
                error => { console.log(error); }
            );
    }

    ConfirmedDelete() {
        this.moduleService.DeleteModule(this.module_delete.id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(s => {
                this.cd.markForCheck();
                this.router.navigate(['/courses']);     //Todo
            });
    }
}


