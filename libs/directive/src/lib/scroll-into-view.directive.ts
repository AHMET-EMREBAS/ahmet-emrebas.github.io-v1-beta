import {
  AfterViewInit,
  Directive,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[aeScrollIntoView]',
})
export class ScrollIntoViewDirective implements AfterViewInit {
  constructor(public readonly el: ElementRef<HTMLDivElement>) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
