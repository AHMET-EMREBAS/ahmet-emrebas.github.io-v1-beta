import { ElementRef } from '@angular/core';

import { ScrollControlDirective } from './scroll-control.directive';

describe('ScrollControlDirective', () => {
  it('should create an instance', () => {
    const divElement = new ElementRef(document.createElement('div'));

    divElement.nativeElement.style.height = '10000px';

    const directive = new ScrollControlDirective(divElement);
    expect(directive).toBeTruthy();
  });
});
