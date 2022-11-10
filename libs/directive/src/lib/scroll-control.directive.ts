import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[aeScrollControl]',
})
export class ScrollControlDirective implements AfterViewInit {
  @Input() toBottom!: boolean;

  constructor(private readonly el: ElementRef<HTMLDivElement>) {}

  ngAfterViewInit(): void {
    console.log('Scrolling ');
    if (this.toBottom) {
      this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
