import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { FormControl  } from '@angular/forms';

@Directive({
  selector: '[trmValidateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validateEmail,
      multi: true
    }
  ]
})
export class EmailValidatorDirective {

  constructor() { }

}

function validateEmail(c: FormControl) {
  var VALID_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  
  return !VALID_EMAIL.test(c.value) && c.value !== '' ? {
    validateEmail: {
      valid: false
    }
  } : null;
}
