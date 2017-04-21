import {FormControl} from '@angular/forms';

const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function emailValidator(c: FormControl) {
  return EMAIL_REGEXP.test(c.value) ? null : {
      email: true
    };
}
