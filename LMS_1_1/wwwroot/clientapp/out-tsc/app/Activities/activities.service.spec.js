import { TestBed } from '@angular/core/testing';
import { ActivitiesService } from './activities.service';
describe('ActivitesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ActivitiesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=activities.service.spec.js.map