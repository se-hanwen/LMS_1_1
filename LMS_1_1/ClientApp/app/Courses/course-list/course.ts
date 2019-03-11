import { Data } from '@angular/router';
import { Guid } from "guid-typescript";
export interface ICourse {
    id?: Guid;
    name: string;
    startDate: Data;
    description: string;
    courseImgPath?: string;

   Modules?:IModule[];
}


export interface IModule {
    id?: Guid;
    name: string;
    startDate: Data;
    endDate: Data;
    description: string;


    Activities?:IActivity[];
}

export interface IActivity {
    id?: Guid;
    name: string;
    startDate: Data;
    endDate: Data;
    description: string;


    activityType: IActivityType
}

export interface IActivityType
{
    id: number;
    name: string;
}

//it is also possible to define course class that implement the Icourse interface
//when needed