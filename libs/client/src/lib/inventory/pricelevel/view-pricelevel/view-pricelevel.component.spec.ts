import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPricelevelComponent } from './view-pricelevel.component';

describe('ViewPricelevelComponent', () => {
  let component: ViewPricelevelComponent;
  let fixture: ComponentFixture<ViewPricelevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPricelevelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPricelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
