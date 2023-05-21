import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function lowerCaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const hasLowerCase = /[a-z]/.test(value);

    return hasLowerCase ? null : { lowerCase: true };
  };
}
