import { TestBed, inject } from '@angular/core/testing';
import { IsTeacherGuard } from './is-teacher.guard';
describe('IsTeacherGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [IsTeacherGuard]
        });
    });
    it('should ...', inject([IsTeacherGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=is-teacher.guard.spec.js.map