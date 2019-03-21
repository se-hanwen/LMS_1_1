import { async, TestBed } from '@angular/core/testing';
import { AddActivitiesWithModulIdComponent } from './add-activities-with-modul-id.component';
describe('AddActivitiesWithModulIdComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddActivitiesWithModulIdComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddActivitiesWithModulIdComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-activities-with-modul-id.component.spec.js.map