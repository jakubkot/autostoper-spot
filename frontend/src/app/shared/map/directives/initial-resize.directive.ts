import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appInitialResize]',
})
export class InitialResizeDirective implements AfterViewInit {
  // private initialResize: boolean = false;

  public constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  public ngAfterViewInit(): void {
    this.adjustMapSize();
    this.triggerResize();
  }
  // //
  // // public ngAfterViewChecked1(): void {
  // //   if (this.initialResize) {
  // //     return;
  // //   }
  // //
  // //   const { offsetHeight, offsetWidth } = this.elementRef.nativeElement;
  // //
  // //   if (offsetHeight && offsetWidth) {
  // //     return this.setInitialResize(true);
  // //   }
  // //
  // //   if (!offsetHeight || !offsetWidth) {
  // //     this.adjustMapSize();
  // //     this.triggerResize();
  // //   }
  // // }
  //
  // private setInitialResize(initialResize: boolean): void {
  //   this.initialResize = initialResize;
  // }

  private adjustMapSize(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '100%');
  }

  private triggerResize(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
