import { TestBed } from '@angular/core/testing';
import { ModuleService } from './module.service';
describe('Module.ServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ModuleService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=module.service.spec.js.map