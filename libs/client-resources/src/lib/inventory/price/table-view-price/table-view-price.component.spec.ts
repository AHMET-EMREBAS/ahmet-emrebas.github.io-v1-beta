import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewPriceComponent } from './table-view-price.component';

describe('TableViewPriceComponent', () => {
  let component: TableViewPriceComponent;
  let fixture: ComponentFixture<TableViewPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewPriceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
