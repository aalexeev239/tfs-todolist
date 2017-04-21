import {Directive, forwardRef, Attribute} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';
@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidateEqual),
      multi: true
    }
  ]
})
export class ValidateEqual implements Validator {
  constructor(@Attribute('validateEqual') public validateEqual: string) {
  }

  validate(control: AbstractControl): {[key: string]: any} {
    const value = control.value;
    const equalControl = control.root.get(this.validateEqual.split('.'));

    return (equalControl && value === equalControl.value) ? null : {
        equal: true
      };
  }
}
