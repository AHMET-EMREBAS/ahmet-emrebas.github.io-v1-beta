import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSkuComponent } from './view-sku.component';

describe('ViewSkuComponent', () => {
  let component: ViewSkuComponent;
  let fixture: ComponentFixture<ViewSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSkuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
