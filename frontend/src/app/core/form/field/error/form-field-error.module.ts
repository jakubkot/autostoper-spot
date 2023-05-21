import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorMessagePipe } from '@core/form/field/error/pipes/form-field-error-message.pipe';

@NgModule({
  declarations: [FormFieldErrorMessagePipe],
  imports: [CommonModule],
  exports: [FormFieldErrorMessagePipe],
})
export class FormFieldErrorModule {}
