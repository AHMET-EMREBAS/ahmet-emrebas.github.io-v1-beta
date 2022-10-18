import {
  AfterViewInit,
  Component,
} from '@angular/core';

import { FilterMetadata } from 'primeng/api';

import { ICategory } from '../category.interface';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ahmet-emrebas-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent implements AfterViewInit {
  entities$ = this.ds.entities$;

  constructor(public readonly ds: CategoryService) {}

  ngAfterViewInit(): void {
    this.ds.getAll();
  }

  filterTable(event: {
    filteredValue: ICategory[];
    filters: {
      [key: string]: FilterMetadata[];
    };
  }) {
    this.ds.filter(event.filters);
  }
}
