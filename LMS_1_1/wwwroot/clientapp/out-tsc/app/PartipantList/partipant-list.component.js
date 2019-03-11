import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartipantService } from '../AddPartipant/partipant.service';
var PartipantListComponent = /** @class */ (function () {
    function PartipantListComponent(route, PartipantService) {
        this.route = route;
        this.PartipantService = PartipantService;
        this.courseid = "";
    }
    PartipantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PartipantService.CourseId = this.courseid;
        this.PartipantService.GetStudentsOn().subscribe(function (user) {
            _this.users = user;
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PartipantListComponent.prototype, "courseid", void 0);
    PartipantListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-partipant-list',
            templateUrl: './partipant-list.component.html',
            styleUrls: ['./partipant-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, PartipantService])
    ], PartipantListComponent);
    return PartipantListComponent;
}());
export { PartipantListComponent };
//# sourceMappingURL=partipant-list.component.js.map