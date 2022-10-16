import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[aematSetAttribute]',
})
export class SetAttributeDirective implements AfterViewInit, OnInit {
  @Input() aematSetAttribute!: Record<string, any>;
  constructor(public readonly el: ElementRef<HTMLInputElement>) {}
  ngOnInit(): void {
    console.log('Input inti');
  }
  ngAfterViewInit(): void {
    if (this.aematSetAttribute) {
      const attributesList = Object.entries(this.aematSetAttribute);

      for (const [key, value] of attributesList) {
        this.el.nativeElement.setAttribute(key, value);
      }
    }
  }
}
