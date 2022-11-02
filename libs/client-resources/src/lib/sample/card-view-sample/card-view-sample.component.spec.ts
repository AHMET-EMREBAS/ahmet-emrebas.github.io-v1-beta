import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewSampleComponent } from './card-view-sample.component';

describe('CardViewSampleComponent', () => {
  let component: CardViewSampleComponent;
  let fixture: ComponentFixture<CardViewSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardViewSampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
