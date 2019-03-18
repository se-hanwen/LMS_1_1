﻿import { Data } from '@angular/router';
import { Guid } from "guid-typescript";
export interface ICourse {
    id?: Guid;
    name: string;
    startDate: Data;
    description: string;
    courseImgPath?: string;
   modules?:IModule[];
}

export class course implements ICourse
{
    id?: Guid;   
    name: string;
    startDate: Data;
    description: string;
    courseImgPath?: string;
    modules?: IModule[];

    
}

export interface IModule {
    id?: Guid;
    name: string;
    startDate: Data;
    endDate: Data;
    description: string;
    name2?:string;
    isExpanded?:string;
    activities?:IActivity2[];
    courseid?: Guid;
}

export interface IActivity {
    id?: Guid;
    name: string;
    startDate: Data;
    endDate: Data;
    description: string;


    activityType: IActivityType
}


export interface IActivity2 {
    id?: Guid;
    name: string;
    startDate: Data;
    endDate: Data;
    description: string;
    name2?:string;
    isExpanded?:string;

    activityType: string
}
export interface IActivityType
{
    id: number;
    name: string;
}

//it is also possible to define course class that implement the Icourse interface
//when needed