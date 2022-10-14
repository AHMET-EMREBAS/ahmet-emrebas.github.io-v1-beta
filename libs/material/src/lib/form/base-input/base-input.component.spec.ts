import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputComponent } from './base-input.component';

describe('BaseInputComponent', () => {
  let component: BaseInputComponent;
  let fixture: ComponentFixture<BaseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
