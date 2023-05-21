import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { FORM_FIELD_ERROR_PARAMS } from '@core/form/field/error/form-field-error-params.const';

@Pipe({
  name: 'formFieldErrorMessage',
})
export class FormFieldErrorMessagePipe implements PipeTransform {
  private readonly DEFAULT_MESSAGE = 'Field is not valid';
  // public constructor(private readonly automationAttributeValueProvider: AutomationAttributeValueProvider) {}

  public transform(
    errors: ValidationErrors,
    messages: { [key: string]: string },
  ): string {
    console.log(errors);
    const convertedMessages = Object.keys(messages).reduce(
      (accumulator: string[], validatorKey: string) => {
        const error = errors[validatorKey];

        if (!error) {
          return accumulator;
        }

        const convertedMessage = messages[validatorKey]
          .replace(
            FORM_FIELD_ERROR_PARAMS.REQUIRED_LENGTH,
            error?.requiredLength,
          )
          .replace(FORM_FIELD_ERROR_PARAMS.ACTUAL_LENGTH, error?.actualLength);

        //const url = `${API_HOST_URL}/${DOCUMENT}`.replace(ApiParams.ID, id.toString());

        return [...accumulator, convertedMessage];
      },
      [],
    );

    if (convertedMessages.length) {
      return convertedMessages[0];
    } else {
      return this.DEFAULT_MESSAGE;
    }
  }
}
