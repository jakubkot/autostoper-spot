import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function upperCaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);

    return hasUpperCase ? null : { upperCase: true };
  };
}
