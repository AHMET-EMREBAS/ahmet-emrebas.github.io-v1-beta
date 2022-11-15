import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuantityComponent } from './view-quantity.component';

describe('ViewQuantityComponent', () => {
  let component: ViewQuantityComponent;
  let fixture: ComponentFixture<ViewQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewQuantityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
