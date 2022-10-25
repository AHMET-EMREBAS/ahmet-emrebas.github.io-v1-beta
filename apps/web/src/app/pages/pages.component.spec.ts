import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { MenuItem } from 'primeng/api';

import { PagesComponent } from './pages.component';
import { PageModules } from './pages.module';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      imports: [PageModules],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the menu items', () => {
    const menuItems: MenuItem[] = [
      { automationId: 'mi-home', label: 'Home' },
      { automationId: 'mi-about', label: 'About' },
      { automationId: 'mi-contact', label: 'Contact' },
    ];
  });

  it('should display logo', () => {
    const logo = { automationId: 'logo' };
    const logoElement = (
      fixture.elementRef.nativeElement as HTMLElement
    ).querySelector(
      `[data-automationId=${'data-' + logo.automationId}]`
    ) as HTMLImageElement;

    expect(logoElement.getAttribute('href')).toBe(
      '/assets/icons/icon-72x72.png'
    );
  });
});
