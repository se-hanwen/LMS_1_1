export interface IDubbParas 
{
    dubbtype: string;
    dubbid: string;
    dubbstart: Date;
    dubbend: Date;
};

export class DubbParas implements IDubbParas
{
    dubbtype: string="" ;
    dubbid: string="";
    dubbstart: Date=null;
    dubbend: Date=null;
};
