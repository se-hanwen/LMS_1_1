import * as tslib_1 from "tslib";
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'ClientApp/app/Courses/course.service';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { Subject } from 'rxjs';
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
var ActitityListComponent = /** @class */ (function () {
    function ActitityListComponent(route, CourseService, AuthService, cd) {
        this.route = route;
        this.CourseService = CourseService;
        this.AuthService = AuthService;
        this.cd = cd;
        this.unsubscribe = new Subject();
        this.isTeacher = false;
    }
    ActitityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTeacher = this.AuthService.isTeacher;
        //this.AuthService.isTeacher.subscribe( i => this.isTeacher=i);
        //getModulAndActivitybyId(Moduleid: string) : Observable<IModule>
        this.CourseService.getModulAndActivitybyId(this.moduleid)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (module) {
            _this.module = module;
            _this.cd.markForCheck();
        }, function (error) { return _this.errorMessage = error; });
    };
    ActitityListComponent.prototype.TogggelCollapse = function (aid) {
        if (this.module.activities.find(function (m) { return m.id.toString() == aid; }).isExpanded == " show") {
            this.module.activities.find(function (m) { return m.id.toString() == aid; }).isExpanded = "";
            // add here for filelist for activity
            /*  if (this.savesubs.find( t => t[0]==mid))
              {
   
                  this.savesubs.find( t => t[0]==mid)[1].unsubscribe();
                  this.savesubs.splice(this.savesubs.indexOf(this.savesubs.find( t => t[0]==mid)),1);
              }
   */
        }
        else {
            this.module.activities.find(function (m) { return m.id.toString() == aid; }).isExpanded = " show";
            /* let temp=this.CourseService.getActivitybymodulId(mid).subscribe(
                      activities=>
                      {
                          this.course.modules.find(m => m.id.toString()==mid).activities=activities;
                      },
                      error => this.errorMessage = <any>error
                  );
              if (this.savesubs.find( t => t[0]==mid))
              {
                  this.savesubs.find( t => t[0]==mid)[1]=temp;
              }
              else
              {
                  this.savesubs.push([mid,temp])  ;
              }
              */
        }
    };
    ActitityListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ActitityListComponent.prototype, "moduleid", void 0);
    ActitityListComponent = tslib_1.__decorate([
        Component({
            selector: "activity_list",
            templateUrl: "actitity_list.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            CourseService,
            AuthService,
            ChangeDetectorRef])
    ], ActitityListComponent);
    return ActitityListComponent;
}());
export { ActitityListComponent };
//# sourceMappingURL=actitity_list.component.js.map