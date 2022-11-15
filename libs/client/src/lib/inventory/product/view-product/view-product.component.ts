import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  IReadCategory,
  IReadDepartment,
  IReadProduct,
} from 'common/inventory/interfaces';
import {
  ColumnOption,
  TableComponent,
} from 'material/table';

import { CategoryService } from '../../category';
import { DepartmentService } from '../../department';
import { ProductService } from '../product.service';

@Component({
  selector: 'ae-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements AfterViewInit {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  totalRecords$ = this.productService.allCount$;
  items$ = this.productService.entities$;

  columns: ColumnOption<IReadProduct>[] = [
    {
      header: '#',
      field: 'id',
    },
    {
      header: 'UUID',
      field: 'uuid',
    },

    {
      header: 'name',
      field: 'name',
    },

    {
      header: 'description',
      field: 'description',
    },

    {
      header: 'category',
      field: 'category',
      mapper: (item?: IReadCategory) => item?.name,
    },

    {
      header: 'department',
      field: 'department',
      mapper: (item?: IReadDepartment) => item?.name,
    },

    {
      header: 'Create Time',
      field: 'createdAt',
    },
    {
      header: 'Update Time',
      field: 'updatedAt',
    },
    {
      header: 'Delete Time',
      field: 'deletedAt',
    },
  ];

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly categoryService: CategoryService,
    private readonly departmentService: DepartmentService
  ) {}

  ngAfterViewInit(): void {
    this.productService.query(this.dataTable.table);
  }

  newItem() {
    this.goTo('create');
  }

  editItems() {
    this.goTo('update');
  }

  deleteItems(event: any) {
    this.goTo('delete');
  }

  goTo(
    path: 'create' | 'update' | 'delete',
    queryParams?: Record<string, any>
  ) {
    this.router.navigate([path], { relativeTo: this.route, queryParams });
  }

  selectItems(event: any) {
    this.productService.updateSelection([...event]);
  }

  handleEvent() {
    this.productService.query(this.dataTable.table);
  }
}
