import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export type HtmlAttribute =
  | keyof HTMLElement
  | keyof HTMLInputElement
  | keyof HTMLImageElement;

export class PageObject<T> {
  constructor(private readonly fixture: ComponentFixture<T>) {}

  protected find(cssSelector: string) {
    return this.fixture.debugElement.query(By.css(cssSelector));
  }

  /**
   *
   * @param elm DebugElement
   * @returns textContent
   */
  text(elm: DebugElement) {
    return (elm.nativeElement as HTMLElement).textContent;
  }

  /**
   *
   * @param elm DebugElement
   * @param attr HtmlElement attribute name
   * @returns value
   */
  attr(elm: DebugElement, attr: HtmlAttribute) {
    return (elm.nativeElement as HTMLElement).getAttribute(attr);
  }
}
