import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewResourceComponent } from './table-view-resource.component';

describe('TableViewResourceComponent', () => {
  let component: TableViewResourceComponent;
  let fixture: ComponentFixture<TableViewResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewResourceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
