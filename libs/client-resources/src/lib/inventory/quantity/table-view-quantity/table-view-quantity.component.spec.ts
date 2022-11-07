import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewQuantityComponent } from './table-view-quantity.component';

describe('TableViewQuantityComponent', () => {
  let component: TableViewQuantityComponent;
  let fixture: ComponentFixture<TableViewQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewQuantityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
