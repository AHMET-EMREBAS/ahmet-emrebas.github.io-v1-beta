import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewFeatureComponent } from './table-view-feature.component';

describe('TableViewFeatureComponent', () => {
  let component: TableViewFeatureComponent;
  let fixture: ComponentFixture<TableViewFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewFeatureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
