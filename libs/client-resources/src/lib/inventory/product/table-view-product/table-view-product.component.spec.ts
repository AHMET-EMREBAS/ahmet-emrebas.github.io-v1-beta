import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewProductComponent } from './table-view-product.component';

describe('TableViewProductComponent', () => {
  let component: TableViewProductComponent;
  let fixture: ComponentFixture<TableViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
