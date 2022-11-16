import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePricelevelComponent } from './delete-pricelevel.component';

describe('DeletePricelevelComponent', () => {
  let component: DeletePricelevelComponent;
  let fixture: ComponentFixture<DeletePricelevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePricelevelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePricelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
