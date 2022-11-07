import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewCategoryComponent } from './table-view-category.component';

describe('TableViewCategoryComponent', () => {
  let component: TableViewCategoryComponent;
  let fixture: ComponentFixture<TableViewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewCategoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
