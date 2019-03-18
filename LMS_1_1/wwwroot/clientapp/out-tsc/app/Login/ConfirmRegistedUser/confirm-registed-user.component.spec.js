import { async, TestBed } from '@angular/core/testing';
import { ConfirmRegistedUserComponent } from './confirm-registed-user.component';
describe('ConfirmRegistedUserComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConfirmRegistedUserComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConfirmRegistedUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=confirm-registed-user.component.spec.js.map