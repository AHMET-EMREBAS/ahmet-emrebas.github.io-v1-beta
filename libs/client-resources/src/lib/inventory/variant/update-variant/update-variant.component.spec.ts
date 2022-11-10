import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVariantComponent } from './update-variant.component';

describe('UpdateVariantComponent', () => {
  let component: UpdateVariantComponent;
  let fixture: ComponentFixture<UpdateVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateVariantComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
