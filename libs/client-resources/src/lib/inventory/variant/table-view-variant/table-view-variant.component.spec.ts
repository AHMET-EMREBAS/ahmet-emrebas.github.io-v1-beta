import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewVariantComponent } from './table-view-variant.component';

describe('TableViewVariantComponent', () => {
  let component: TableViewVariantComponent;
  let fixture: ComponentFixture<TableViewVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewVariantComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
