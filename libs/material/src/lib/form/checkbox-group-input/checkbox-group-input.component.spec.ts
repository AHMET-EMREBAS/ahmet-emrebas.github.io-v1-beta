import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxGroupInputComponent } from './checkbox-group-input.component';

describe('CheckboxGroupInputComponent', () => {
  let component: CheckboxGroupInputComponent;
  let fixture: ComponentFixture<CheckboxGroupInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxGroupInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxGroupInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
