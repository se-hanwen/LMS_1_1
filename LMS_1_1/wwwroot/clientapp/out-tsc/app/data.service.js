import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService() {
        this.activityData = new BehaviorSubject("");
        this.share = this.activityData.asObservable();
    }
    DataService.prototype.getData = function (type) {
        this.activityData.next(type);
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map