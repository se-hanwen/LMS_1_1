import { Data } from '@angular/router';

export interface IDocument
{
    id?: string;
    name: string;
    description: string;
    uploaderId: string;
    docOwnerTypeId: number;
    path: string;
}
