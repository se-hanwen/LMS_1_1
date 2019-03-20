import { async, TestBed } from '@angular/core/testing';
import { CheckIfDubbsComponent } from './check-if-dubbs.component';
describe('CheckIfDubbsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CheckIfDubbsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CheckIfDubbsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=check-if-dubbs.component.spec.js.map