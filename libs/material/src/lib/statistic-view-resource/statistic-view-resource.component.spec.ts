import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticViewResourceComponent } from './statistic-view-resource.component';

describe('StatisticViewResourceComponent', () => {
  let component: StatisticViewResourceComponent;
  let fixture: ComponentFixture<StatisticViewResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticViewResourceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticViewResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
