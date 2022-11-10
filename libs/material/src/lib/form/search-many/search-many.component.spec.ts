import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchManyComponent } from './search-many.component';

describe('SearchManyComponent', () => {
  let component: SearchManyComponent;
  let fixture: ComponentFixture<SearchManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchManyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
