import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewResourceComponent } from './card-view-resource.component';

describe('CardViewResourceComponent', () => {
  let component: CardViewResourceComponent;
  let fixture: ComponentFixture<CardViewResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardViewResourceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
