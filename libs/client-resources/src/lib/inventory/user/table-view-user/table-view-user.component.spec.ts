import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewUserComponent } from './table-view-user.component';

describe('TableViewUserComponent', () => {
  let component: TableViewUserComponent;
  let fixture: ComponentFixture<TableViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewUserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
