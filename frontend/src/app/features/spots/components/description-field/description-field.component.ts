import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-description-field',
  templateUrl: './description-field.component.html',
  styleUrls: ['./description-field.component.scss'],
})
export class DescriptionFieldComponent {
  @Input() public value!: string | null;

  @Output() public readonly saveEvent = new EventEmitter<string>();
  @Output() public readonly cancelEvent = new EventEmitter<void>();

  public save(): void {
    this.saveEvent.emit(this.value!);
  }

  public cancel(): void {
    this.cancelEvent.emit();
  }
}
