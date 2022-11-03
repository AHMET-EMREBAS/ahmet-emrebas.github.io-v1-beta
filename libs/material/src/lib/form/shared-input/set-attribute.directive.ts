import {
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[aeSetAttribute]',
})
export class SetAttributeDirective implements OnInit {
  @Input() aeSetAttribute!: Partial<HTMLInputElement>;
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
