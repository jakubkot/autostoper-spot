import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidatorErrorBuilder {
  private validatorError!: any;

  public setKey(value: string): this {
    // enum
    this.validatorError.key = value;

    return this;
  }

  public setMessage(value: string): this {
    this.validatorError.message = value;

    return this;
  }
}
