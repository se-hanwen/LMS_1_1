import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ICourse } from '../course';
import { ActivatedRoute, Data, Router} from '@angular/router';

import { CourseService } from '../course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit, OnDestroy  {
  private unsubscribe : Subject<void> = new Subject();
    course: ICourse;
    errorMessage: string;
    courseForm: FormGroup;
    @ViewChild("fileInput") fileInputVariable: any;
    showMsg: boolean = false;
    constructor(private route: ActivatedRoute, private CourseService: CourseService
      , private router: Router,  private cd: ChangeDetectorRef) { }

  ngOnInit() {
    }
    
    
    

    register(formValues) {

       
     
        let fileToUpload = this.fileInputVariable.nativeElement.files[0];
        let formData = new FormData();
       
        formData.append('Name', formValues.name);
        formData.append('StartDate', formValues.startDate);
        formData.append('Description', formValues.description);
        formData.append('FileData', fileToUpload);
        console.log(formData);
        this.CourseService.createCourse(formData)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
            (result) => {
                this.showMsg = true;
                this.router.navigate(['/courses'])
                
                console.log(result);
                console.log("Created a Course");

                this.cd.markForCheck();
            },
            error => this.errorMessage = <any>error
        );
    }

    ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }
    
}
