import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IActivity } from 'ClientApp/app/Courses/course';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ActivitiesService } from '../activities.service';

@Component({
    selector: 'app-activity-delete',
    templateUrl: './activity-delete.component.html',
    styleUrls: ['./activity-delete.component.css']
})
export class ActivityDeleteComponent implements OnInit {

    private act_delete: IActivity;
    private unsubscribe: Subject<void> = new Subject();

    constructor(private route: ActivatedRoute,
        private actvservice: ActivitiesService,
        private router: Router,
        private cd: ChangeDetectorRef) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get("id");
        this.actvservice.GetActivity(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                tactv => {
                    this.act_delete = tactv;
                    this.cd.markForCheck();
                },
                error => { console.log(error); });
    }

    DelActivity() {
        this.actvservice.DeleteActivity(this.act_delete.id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(tact => {
                this.cd.markForCheck();
                this.router.navigate(['/courses']);
            });

    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}