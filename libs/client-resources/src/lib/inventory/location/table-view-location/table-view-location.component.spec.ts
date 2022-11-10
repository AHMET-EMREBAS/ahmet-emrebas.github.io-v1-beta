import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewLocationComponent } from './table-view-location.component';

describe('TableViewLocationComponent', () => {
  let component: TableViewLocationComponent;
  let fixture: ComponentFixture<TableViewLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewLocationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
