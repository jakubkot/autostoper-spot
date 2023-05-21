import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { FORM_FIELD_ERROR_PARAMS } from '@core/form/field/error/form-field-error-params.const';
import { FORM_FIELD_ERROR_MESSAGES } from '@core/form/field/error/form-field-error-messages.const';
import { FormFieldValidationKey } from '@core/form/field/error/form-field-validation-key.enum';
import { merge, of } from 'rxjs';
import { PartialRecord } from '@utils/types/partial-record';
import { ValidationErrorNotFoundException } from '@shared/field-error/exceptions/validation-error-not-found.exception';

const DEFAULT_LABEL_NAME = 'field';

@Directive({
  selector: '[appErrorMessages]',
})
export class ErrorMessagesDirective implements OnInit {
  @Input() public control!: FormControl;
  @Input() public label = DEFAULT_LABEL_NAME;
  @Input() public customMessages?: PartialRecord<
    FormFieldValidationKey,
    string
  >;
  @Input() public showOnlyFirst = true;

  public constructor(
    private readonly elementRef: ElementRef<HTMLTableRowElement>,
    private readonly renderer: Renderer2,
  ) {}

  public ngOnInit(): void {
    this.listenOnChangeValue();
  }

  private listenOnChangeValue(): void {
    merge(of(this.control.value), this.control.valueChanges).subscribe(() =>
      this.renderErrorMessage(),
    );
  }

  private renderErrorMessage(): void {
    const errors = this.control.errors;
    const isValid = this.control.valid;

    if (isValid) {
      return this.renderEmptyMessage();
    }

    if (!errors || !Object.keys(errors)) {
      return this.renderEmptyMessage();
    }

    const messages = this.getMessagesByErrors(errors);

    if (!messages.length) {
      messages.push(FormFieldValidationKey.NOT_VALID);
    }

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      messages.join('. '),
    );
  }

  private renderEmptyMessage(): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', null);
  }

  private getMessagesByErrors(errors: ValidationErrors): string[] {
    const errorKeys = Object.keys(errors) as FormFieldValidationKey[];

    if (this.showOnlyFirst) {
      console.log('here!');
      errorKeys.slice(0, 1);
    }

    console.log(errorKeys);

    return errorKeys.reduce(
      (accumulator: string[], errorKey: FormFieldValidationKey) => {
        const error = errors[errorKey];
        const customErrorMessage = this.customMessages?.[errorKey];

        if (customErrorMessage) {
          return [...accumulator, customErrorMessage];
        }

        const rawMessage = FORM_FIELD_ERROR_MESSAGES[errorKey];

        if (!rawMessage) {
          throw new ValidationErrorNotFoundException(
            `Not found form field validation error for "${errorKey}".`,
          );
        }

        const message = rawMessage
          .replace(FORM_FIELD_ERROR_PARAMS.LABEL, this.label)
          .replace(
            FORM_FIELD_ERROR_PARAMS.REQUIRED_LENGTH,
            error?.requiredLength,
          )
          .replace(FORM_FIELD_ERROR_PARAMS.ACTUAL_LENGTH, error?.actualLength);

        return [...accumulator, message];
      },
      [],
    );
  }
}
