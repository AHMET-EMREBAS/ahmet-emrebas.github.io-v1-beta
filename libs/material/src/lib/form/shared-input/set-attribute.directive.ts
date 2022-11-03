import {
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

import { HtmlInputOptions } from './html-input-element';

@Directive({
  selector: '[aeSetAttribute]',
})
export class SetAttributeDirective implements OnInit {
  @Input() aeSetAttribute!: HtmlInputOptions;
  constructor(private readonly elm: ElementRef<HTMLInputElement>) {}
  ngOnInit(): void {
    for (const [key, value] of Object.entries(this.aeSetAttribute)) {
      this.set(key, value);
    }
  }

  private set(key: string, value: any) {
    this.elm.nativeElement.setAttribute(key, value);
  }
}
