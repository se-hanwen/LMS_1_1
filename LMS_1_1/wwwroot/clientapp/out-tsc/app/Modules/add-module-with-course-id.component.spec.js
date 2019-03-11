import { async, TestBed } from '@angular/core/testing';
import { AddModuleWithCourseIdComponent } from './add-module-with-course-id.component';
describe('AddModuleWithCourseIdComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddModuleWithCourseIdComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddModuleWithCourseIdComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-module-with-course-id.component.spec.js.map