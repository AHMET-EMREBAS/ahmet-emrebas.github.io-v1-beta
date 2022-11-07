import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewOrderComponent } from './table-view-order.component';

describe('TableViewOrderComponent', () => {
  let component: TableViewOrderComponent;
  let fixture: ComponentFixture<TableViewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewOrderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
