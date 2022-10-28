import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[aeSetAttribute]',
})
export class SetAttributeDirective implements AfterViewInit {
  @Input() aeSetAttribute!: Partial<HTMLInputElement>;
  constructor(private readonly el: ElementRef<HTMLInputElement>) {}
  ngAfterViewInit(): void {
    for (const [key, value] of Object.entries(this.aeSetAttribute)) {
      this.el.nativeElement.setAttribute(key, value + '');
    }
  }
}
