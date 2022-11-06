import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Optional,
} from '@angular/core';

import { HtmlInputOptions } from './html-input-element';

@Directive({
  selector: '[aeSetAttribute]',
})
export class SetAttributeDirective implements AfterViewInit {
  @Input() aeSetAttribute!: HtmlInputOptions;
  constructor(@Optional() private readonly elm: ElementRef<HTMLInputElement>) {}
  ngAfterViewInit(): void {
    for (const [key, value] of Object.entries(this.aeSetAttribute)) {
      this.elm.nativeElement.setAttribute(key, value as any);
    }

    const sub = this.elm.nativeElement.querySelector(
      `#${this.aeSetAttribute.id} input`
    );

    if (sub)
      for (const [key, value] of Object.entries(this.aeSetAttribute)) {
        sub.setAttribute(key, value as any);
        console.log(key, value);
      }
  }
}
