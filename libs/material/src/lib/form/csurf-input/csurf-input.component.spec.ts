import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsurfInputComponent } from './csurf-input.component';

describe('CsurfInputComponent', () => {
  let component: CsurfInputComponent;
  let fixture: ComponentFixture<CsurfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsurfInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsurfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
