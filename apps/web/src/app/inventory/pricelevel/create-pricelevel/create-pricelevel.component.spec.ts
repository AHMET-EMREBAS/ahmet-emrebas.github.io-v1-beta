import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePricelevelComponent } from './create-pricelevel.component';

describe('CreatePricelevelComponent', () => {
  let component: CreatePricelevelComponent;
  let fixture: ComponentFixture<CreatePricelevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePricelevelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePricelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
