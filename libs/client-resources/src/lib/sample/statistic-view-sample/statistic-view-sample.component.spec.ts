import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticViewSampleComponent } from './statistic-view-sample.component';

describe('StatisticViewSampleComponent', () => {
  let component: StatisticViewSampleComponent;
  let fixture: ComponentFixture<StatisticViewSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticViewSampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticViewSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
