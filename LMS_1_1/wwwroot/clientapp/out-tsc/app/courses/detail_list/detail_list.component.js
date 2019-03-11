import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var detailList = /** @class */ (function () {
    function detailList() {
        this.coulist = [
            {
                Name: "C# Basic",
                StartDate: "2019.01.02 10:00",
                Description: "A basic course of C#",
                Modules: [
                    {
                        Name: "C# module 1",
                        StartDate: "2019.01.02 10:00",
                        Description: "Module 1 of C#"
                    },
                    {
                        Name: "C# module 2",
                        StartDate: "2019.01.02 10:00",
                        Description: "Module 2 of C#"
                    }
                ]
            },
            {
                Name: "C# Advanced",
                StartDate: "2019.01.03 10:00",
                Description: "A follow on course of C#",
                Modules: [
                    {
                        Name: "C# module 3",
                        StartDate: "2019.01.03 10:00",
                        Description: "Module 3 of C#"
                    },
                    {
                        Name: "C# module 4",
                        StartDate: "2019.01.03 10:00",
                        Description: "Module 4 of C#"
                    }
                ]
            }
        ];
    }
    detailList = tslib_1.__decorate([
        Component({
            selector: "detail_list",
            templateUrl: "detail_list.component.html",
            styleUrls: []
        })
    ], detailList);
    return detailList;
}());
export { detailList };
//# sourceMappingURL=detail_list.component.js.map