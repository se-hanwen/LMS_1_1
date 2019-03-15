import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var LoginMessageHandlerService = /** @class */ (function () {
    function LoginMessageHandlerService() {
        this.useridSource = new BehaviorSubject(' ');
        this.userid = this.useridSource.asObservable();
    }
    LoginMessageHandlerService.prototype.Send = function (userid) {
        this.useridSource.next(userid == null ? '' : userid);
        return true;
    };
    LoginMessageHandlerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LoginMessageHandlerService);
    return LoginMessageHandlerService;
}());
export { LoginMessageHandlerService };
//# sourceMappingURL=login-message-handler.service.js.map