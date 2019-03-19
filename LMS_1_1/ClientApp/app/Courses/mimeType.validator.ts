import { AbstractControl, ValidatorFn } from '@angular/forms';



export function mimeTypeValidator(mimeType: string): ValidatorFn {
   return  (control: AbstractControl) =>{

        if (control && (control.value !== null || control.value !== undefined)) {
           
            let MIMEtype = mimeType.split("/")[0];
            if (MIMEtype !== "Image") {
                return {
                    isError: true
                }
            }
        }
        return null;
    }
}


