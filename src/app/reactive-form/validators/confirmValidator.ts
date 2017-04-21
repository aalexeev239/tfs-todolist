import {FormControl} from '@angular/forms';

export function confirmValidator(targetC: FormControl, c: FormControl) {

  const isValid = targetC.value && c.value && targetC.value === c.value;

  return isValid ? null : {
      confirm: true
    };
}
