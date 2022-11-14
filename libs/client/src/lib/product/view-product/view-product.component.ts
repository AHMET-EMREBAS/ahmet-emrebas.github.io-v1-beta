import {
  Component,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  ICategory,
  IDepartment,
  IProduct,
} from 'common/inventory/interfaces';
import {
  ColumnOption,
  FilterEvent,
  PageEvent,
  SortEvent,
  TableComponent,
} from 'material/table';
import { take } from 'rxjs';

import { ProductService } from '../product.service';

@Component({
  selector: 'ae-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  items$ = this.service.entities$.pipe(take(20));
  columns: ColumnOption<IProduct<ICategory, IDepartment>>[] = [
    { header: '#', field: 'id' },
    { header: 'UUID', field: 'uuid' },
    { header: 'Name', field: 'name' },
    { header: 'Description', field: 'description' },

    { header: 'Category', field: 'category', mapper: (c: ICategory) => c.name },
    {
      header: 'Department',
      field: 'department',
      mapper: (c: IDepartment) => c.name,
    },

    { header: 'Create Time', field: 'createdAt' },
    { header: 'Update Time', field: 'updatedAt' },
    { header: 'Delete Time', field: 'deletedAt' },
  ];
  constructor(
    private readonly service: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.service.addOneToCache({
      id: 1,
      name: 'SOme ',
      description: ' SOm descrip',
      category: {
        id: 3,
        name: 'SOme cat',
      },
      department: {
        id: 3,
        name: 'some dep ',
      },
    });
  }

  handleEvent(event: any, name: 'sort' | 'page' | 'select' | 'filter') {
    console.log(event);
  }

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
}
