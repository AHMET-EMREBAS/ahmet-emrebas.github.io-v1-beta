import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewPermissionComponent } from './table-view-permission.component';

describe('TableViewPermissionComponent', () => {
  let component: TableViewPermissionComponent;
  let fixture: ComponentFixture<TableViewPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewPermissionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
