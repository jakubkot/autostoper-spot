import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagesDirective } from '@shared/field-error/directives/error-messages.directive';

@NgModule({
  declarations: [ErrorMessagesDirective],
  imports: [CommonModule],
  exports: [ErrorMessagesDirective],
})
export class FieldErrorModule {}
