import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Optional,
  ViewContainerRef,
} from '@angular/core';

import { HtmlInputOptions } from './html-input-element';

@Directive({
  selector: '[aeSetAttribute]',
})
export class SetAttributeDirective implements OnInit {
  @Input() aeSetAttribute!: HtmlInputOptions;
  constructor(
    @Optional() private readonly elm: ElementRef<HTMLInputElement>,
    @Optional() private readonly con: ViewContainerRef
  ) {}
  ngOnInit(): void {
    for (const [key, value] of Object.entries(this.aeSetAttribute)) {
      this.set(key, value);
    }
  }

  private set(key: string, value: any) {
    (this.con as any)[key] = value;

    if (this.elm.nativeElement) {
      this.elm.nativeElement.setAttribute(key, value);
    } else {
    }
  }
}
