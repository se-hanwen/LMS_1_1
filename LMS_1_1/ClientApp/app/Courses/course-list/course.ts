import { Data } from '@angular/router';
import { Guid } from "guid-typescript";
export interface ICourse {
    id?: Guid;
    name: string;
    startDate: Data;
    description: string;
    fileData: File;
}
//it is also possible to define course class that implement the Icourse interface
//when needed