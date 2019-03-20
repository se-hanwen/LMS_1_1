import { AbstractControl, ValidatorFn } from '@angular/forms';



export function mimeTypeValidator(): ValidatorFn {
   return  (control: AbstractControl) =>{

        if (control && (control.value !== null || control.value !== undefined)) {
            let mimeType = control.value;
            console.log(mimeType.endsWith('jpg'));
            if (!mimeType.endsWith('jpg')) {
                return {
                    isError: true
                }
            }
        }
        return null;
    }
}


