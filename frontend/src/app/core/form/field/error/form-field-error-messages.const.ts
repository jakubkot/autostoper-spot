import { FORM_FIELD_ERROR_PARAMS } from '@core/form/field/error/form-field-error-params.const';
import { FormFieldValidationKey } from '@core/form/field/error/form-field-validation-key.enum';

const { REQUIRED_LENGTH, ACTUAL_LENGTH, LABEL } = FORM_FIELD_ERROR_PARAMS;

export const FORM_FIELD_ERROR_MESSAGES: Record<FormFieldValidationKey, string> =
  {
    [FormFieldValidationKey.NOT_VALID]: `${LABEL} is not valid.`,
    [FormFieldValidationKey.REQUIRED]: `${LABEL} is required.`,
    [FormFieldValidationKey.MIN_LENGTH]: `${LABEL} must have minimum ${REQUIRED_LENGTH} characters, but it has only ${ACTUAL_LENGTH}.`,
    [FormFieldValidationKey.MAX_LENGTH]: `${LABEL} must have maximum ${REQUIRED_LENGTH} characters, but it has ${ACTUAL_LENGTH}.`,
    [FormFieldValidationKey.PATTERN]: `${LABEL} must have only allowed characters`,
    [FormFieldValidationKey.NUMERIC]: `${LABEL} must contain any number`,
    [FormFieldValidationKey.LOWER_CASE]: `${LABEL} must contain any lower case`,
    [FormFieldValidationKey.UPPER_CASE]: `${LABEL} must contain ay upper case`,
  };
