import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-web-component-wrapper',
  templateUrl: './web-component-wrapper.component.html',
  styleUrls: ['./web-component-wrapper.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class WebComponentWrapperComponent {}
