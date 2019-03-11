export interface IPartipant
{
    userid : string;
    firstName: string;
    lastName: string;
}

 export interface ICourseNameData
 {
    contentType:string;
    serializerSettings:string;
    statusCode?:number;
    value : ICourseNameSubdata;
 }

 export interface ICourseNameSubdata
 {
    name:string;

 }