import { TestBed, inject } from '@angular/core/testing';
import { IsAuthenticatedGuard } from './is-authenticated.guard';
describe('IsAuthenticatedGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [IsAuthenticatedGuard]
        });
    });
    it('should ...', inject([IsAuthenticatedGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=is-authenticated.guard.spec.js.map