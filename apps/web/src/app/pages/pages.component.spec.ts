import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { PageObject } from 'client-utils';

import { PagesComponent } from './pages.component';
import { PageModules } from './pages.module';

class POM extends PageObject<PagesComponent> {
  logo = this.find('img[role=logo]');
  menubar = this.find('p-menubar');
  homeBtn = this.find('[data-automationId=mi-home]');
  aboutBtn = this.find('[data-automationId=mi-about]');
  contactBtn = this.find('[data-automationId=mi-contact]');
  callBtn = this.find('[data-automationId=mi-call]');
  emailBtn = this.find('[data-automationId=mi-email]');
}

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  let pom: POM;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      imports: [PageModules],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    await fixture.whenStable();
    pom = new POM(fixture);
  });

  it('should render each fragment', () => {
    expect(component).toBeTruthy();
    expect(pom.menubar).toBeTruthy();
    expect(pom.logo).toBeTruthy();
    expect(pom.aboutBtn).toBeTruthy();
    expect(pom.homeBtn).toBeTruthy();
    expect(pom.contactBtn).toBeTruthy();
    expect(pom.emailBtn).toBeTruthy();
    expect(pom.callBtn).toBeTruthy();
  });

  it('should render the menu items with correct labels.', () => {
    expect(pom.text(pom.aboutBtn)).toBe('About');
    expect(pom.text(pom.homeBtn)).toBe('Home');
    expect(pom.text(pom.contactBtn)).toBe('Contact');
    expect(pom.attr(pom.logo, 'alt')).toBe('Application Logo');
  });
});
