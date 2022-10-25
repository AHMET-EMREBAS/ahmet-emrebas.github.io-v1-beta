import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class PageObject<T> {
  constructor(private readonly fixture: ComponentFixture<T>) {}

  protected find(cssSelector: string) {
    return this.fixture.debugElement.query(By.css(cssSelector));
  }
}
