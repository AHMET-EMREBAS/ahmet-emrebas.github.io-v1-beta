import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IReadSku, IReadProduct } from 'common/inventory/interfaces';

import {
  ColumnOption,
  FilterEvent,
  PageEvent,
  SortEvent,
  TableComponent,
} from 'material/table';

import { SkuService } from '../sku.service';

import { ProductService } from '../../product';

@Component({
  selector: 'ae-view-sku',
  templateUrl: './view-sku.component.html',
  styleUrls: ['./view-sku.component.scss'],
})
export class ViewSkuComponent implements AfterViewInit {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  totalRecords$ = this.skuService.allCount$;
  items$ = this.skuService.entities$;

  columns: ColumnOption<IReadSku>[] = [
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
      header: 'barcode',
      field: 'barcode',
    },

    {
      header: 'description',
      field: 'description',
    },

    {
      header: 'product',
      field: 'product',
      mapper: (item?: IReadProduct) => item?.name,
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
    private readonly skuService: SkuService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  ngAfterViewInit(): void {
    this.skuService.query(this.dataTable.table);
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
    this.skuService.updateSelection([...event]);
  }

  handleEvent() {
    this.skuService.query(this.dataTable.table);
  }
}
