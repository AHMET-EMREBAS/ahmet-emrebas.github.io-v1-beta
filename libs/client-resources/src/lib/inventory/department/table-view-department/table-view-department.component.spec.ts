import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewDepartmentComponent } from './table-view-department.component';

describe('TableViewDepartmentComponent', () => {
  let component: TableViewDepartmentComponent;
  let fixture: ComponentFixture<TableViewDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewDepartmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
