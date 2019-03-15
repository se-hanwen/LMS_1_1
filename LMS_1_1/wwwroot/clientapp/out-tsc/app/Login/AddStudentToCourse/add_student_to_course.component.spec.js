import { async, TestBed } from '@angular/core/testing';
import { AddStudentToCourseComponent } from './add_student_to_course.component';
describe('AddStudentToCourseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddStudentToCourseComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddStudentToCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add_student_to_course.component.spec.js.map