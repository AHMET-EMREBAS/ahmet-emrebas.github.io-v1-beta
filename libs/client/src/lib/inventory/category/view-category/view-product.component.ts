import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICategory, IDepartment, ICategory } from 'common/inventory/interfaces';
import {
  ColumnOption,
  FilterEvent,
  PageEvent,
  SortEvent,
  TableComponent,
} from 'material/table';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ae-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  items$ = this.service.entities$.pipe();
  columns: ColumnOption<ICategory<ICategory, IDepartment>>[] = [];
  constructor(
    private readonly service: CategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  newItem() {
    this.goTo('Create');
  }

  editItems() {
    this.goTo('Update');
  }

  deleteItems(event: any) {
    this.goTo('Delete');
  }

  goTo(
    path: 'Create' | 'Update' | 'Delete',
    queryParams?: Record<string, any>
  ) {
    this.router.navigate([path], { relativeTo: this.route, queryParams });
  }

  selectItems(event: any) {
    this.service.updateSelection([...event]);
  }

  sortItems(event: SortEvent) {
    console.log(event);
  }

  pageData(event: PageEvent) {
    console.log(event);
  }

  filterData(event: FilterEvent) {
    console.log(event);
  }

  handleEvent() {
    setTimeout(() => {
      const table = this.dataTable.table;
      this.service.clearCache();
      this.service.getWithQuery({
        take: table.rows + '',
        skip: table.first + '',
        where: JSON.stringify(table.filters),
        sortField: table.sortField,
        sortOrder: table.sortOrder + '',
      });
    });
  }
}
