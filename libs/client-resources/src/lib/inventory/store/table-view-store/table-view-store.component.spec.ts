import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewStoreComponent } from './table-view-store.component';

describe('TableViewStoreComponent', () => {
  let component: TableViewStoreComponent;
  let fixture: ComponentFixture<TableViewStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewStoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
