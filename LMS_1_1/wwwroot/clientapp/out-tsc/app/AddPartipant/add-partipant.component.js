import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartipantService } from './partipant.service';
var AddPartipantComponent = /** @class */ (function () {
    function AddPartipantComponent(route, router, PartipantService) {
        this.route = route;
        this.router = router;
        this.PartipantService = PartipantService;
        this.pageTitle = "";
        this.BlackList = [];
        this.ChooseFrom = [];
        this.Choosed = [];
        this.courseId = "";
    }
    AddPartipantComponent.prototype.ngOnInit = function () {
    };
    AddPartipantComponent = tslib_1.__decorate([
        Component({
            selector: 'add-partipant',
            templateUrl: './add-partipant.component.html',
            styleUrls: ['./add-partipant.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            PartipantService])
    ], AddPartipantComponent);
    return AddPartipantComponent;
}());
export { AddPartipantComponent };
//# sourceMappingURL=add-partipant.component.js.map