import {AbstractControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';

 export function validMatch(control: AbstractControl):{ [key: string]: any } {
    const password = control.get('password');
    const confirmpassword= control.get('confirmpassword');
   if (!password || !confirmpassword) {
       return null;
    }
   if (password.value === confirmpassword.value) {
     return null;
   }
  return {
     mismatch: true };
}
