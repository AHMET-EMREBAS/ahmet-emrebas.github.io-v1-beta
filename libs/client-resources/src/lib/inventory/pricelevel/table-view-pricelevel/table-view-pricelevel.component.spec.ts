import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewPricelevelComponent } from './table-view-pricelevel.component';

describe('TableViewPricelevelComponent', () => {
  let component: TableViewPricelevelComponent;
  let fixture: ComponentFixture<TableViewPricelevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewPricelevelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewPricelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
