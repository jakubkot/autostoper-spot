import { ElementRef } from '@angular/core';

export function htmlElement(
  fixture: ElementRef,
  selector: string,
): HTMLElement {
  return fixture.nativeElement.querySelector(selector);
}
