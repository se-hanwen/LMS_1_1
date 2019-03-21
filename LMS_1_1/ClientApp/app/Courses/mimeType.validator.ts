import { AbstractControl, ValidatorFn } from '@angular/forms';



export function mimeTypeValidator(): ValidatorFn {
   return  (control: AbstractControl) =>{

        if (control && (control.value !== null || control.value !== undefined)) {
            let mimeType = control.value;
            console.log(mimeType.endsWith('png'));
            if (!(mimeType.endsWith('jpg')) || !(mimeType.endsWith('png'))) {
                return {
                    isError: true
                }
            }
        }
        return null;
    }
}


