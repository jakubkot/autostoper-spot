import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function numericValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const hasNumeric = /[0-9]+/.test(value);

    return hasNumeric ? null : { numeric: true };
  };
}
