import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewTransactionComponent } from './table-view-transaction.component';

describe('TableViewTransactionComponent', () => {
  let component: TableViewTransactionComponent;
  let fixture: ComponentFixture<TableViewTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewTransactionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
