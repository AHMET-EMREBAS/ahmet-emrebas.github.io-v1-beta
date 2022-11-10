import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewSkuComponent } from './table-view-sku.component';

describe('TableViewSkuComponent', () => {
  let component: TableViewSkuComponent;
  let fixture: ComponentFixture<TableViewSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewSkuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
