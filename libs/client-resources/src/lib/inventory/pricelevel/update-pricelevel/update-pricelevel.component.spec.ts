import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePricelevelComponent } from './update-pricelevel.component';

describe('UpdatePricelevelComponent', () => {
  let component: UpdatePricelevelComponent;
  let fixture: ComponentFixture<UpdatePricelevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePricelevelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePricelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
