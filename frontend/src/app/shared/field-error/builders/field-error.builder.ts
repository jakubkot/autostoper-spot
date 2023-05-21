import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class FieldErrorBuilder {
  private fieldError!: any;

  public setLabel(value: string): this {
    this.fieldError.label = value;

    return this;
  }

  public setControl(value: FormControl): this {
    this.fieldError.control = value;

    return this;
  }

  public setValidatorErrors(
    value: (validatorErrorsBuilder: any) => any[],
  ): this {
    const validatorErrorsBuilderInstance = new ValidatorErrorsBuilder();

    this.fieldError.validatorErrors = value(validatorErrorsBuilderInstance);

    return this;
  }
}
