import { AbstractControl, ValidatorFn } from '@angular/forms';



export function mimeTypeValidator(): ValidatorFn {
   return  (control: AbstractControl) =>{

        if (control && (control.value !== null || control.value !== undefined)) {
            let mimeType: string = control.value;
            //console.log(mimeType.endsWith('png'));
            if(mimeType==null || mimeType=="")
            {
            let lastdot=mimeType.lastIndexOf(".");
            if(lastdot>-1)
            {
            let extention: string=mimeType.substring(lastdot+1);
            let imageext:string[]=[
                "bmp"
                ,"cod"
                ,"gif"
                ,"ief"
                ,"jpe"
                ,"jpeg"
                ,"jpg"
                ,"jfif"
                ,"svg"
                ,"tif"
                ,"tiff"
                ,"ras"
                ,"cmx"
                ,"ico"
                ,"pnm"
                ,"pbm"
                ,"pgm"
                ,"ppm"
                ,"rgb"
                ,"xbm"
                ,"xpm"
                ,"xwd"
            ];
            if (!( imageext.includes( extention)))
            {
                return {
                    isError: true
                }
            }
        }
/*
            if (!(mimeType.endsWith('jpg')) || !(mimeType.endsWith('png'))) {
                return {
                    isError: true
                }
            }
            */
        }
    }
        return null;
    }
}


