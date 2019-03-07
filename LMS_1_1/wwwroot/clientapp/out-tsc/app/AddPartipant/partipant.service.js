import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PartipantService = /** @class */ (function () {
    function PartipantService(http, CourseId) {
        this.http = http;
        this.CourseId = CourseId;
        this.Choosed = [];
    }
    /*
    public GetStudents(choosed : boolean): Observable<Partipant[] | undefined>
    {
        let url:string="/CourseUsers/AddStudentsToCourse";

    }
*/
    PartipantService.prototype.SaveStudents = function () {
    };
    PartipantService.prototype.AddStudent = function (user) {
        var item = this.Choosed.find(function (i) { return i.Userid == user.Userid; });
        if (!item) {
            this.Choosed.push(user);
        }
    };
    PartipantService.prototype.RemoveStudent = function (user) {
        var item = this.Choosed.find(function (i) { return i.Userid == user.Userid; });
        var index = this.Choosed.indexOf(item);
        if (item) {
            this.Choosed.splice(index, 1);
        }
    };
    PartipantService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], PartipantService);
    return PartipantService;
}());
export { PartipantService };
//# sourceMappingURL=partipant.service.js.map