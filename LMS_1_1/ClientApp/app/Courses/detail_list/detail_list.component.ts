import { Component } from "@angular/core";


@Component({
    selector: "detail_list",
    templateUrl: "detail_list.component.html",
    styleUrls:[]
})

export class detailList{
    public courseTitle: "C#";
    public startDate: "2019.01.02 10:00";
    public description: "There are no external authentication services configured. See this article for details on setting up this ASP.NET application to support logging in via external services.";
    public coulist = [
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