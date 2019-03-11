import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var UploadComponent = /** @class */ (function () {
    function UploadComponent(http) {
        this.http = http;
        this.onUploadFinished = new EventEmitter();
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], UploadComponent.prototype, "onUploadFinished", void 0);
    UploadComponent = tslib_1.__decorate([
        Component({
            selector: 'app-upload',
            templateUrl: './upload.component.html',
            styleUrls: ['./upload.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UploadComponent);
    return UploadComponent;
}());
export { UploadComponent };
//# sourceMappingURL=upload.component.js.map