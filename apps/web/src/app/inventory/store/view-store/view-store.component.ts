import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IReadStore, IReadPricelevel } from 'common/inventory/interfaces';

import {
  ColumnOption,
  FilterEvent,
  PageEvent,
  SortEvent,
  TableComponent,
} from 'material/table';

import { StoreService } from '../store.service';

import { PricelevelService } from '../../pricelevel';

@Component({
  selector: 'ae-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.scss'],
})
export class ViewStoreComponent implements AfterViewInit {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  totalRecords$ = this.storeService.allCount$;
  items$ = this.storeService.entities$;

  columns: ColumnOption<IReadStore>[] = [
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
      header: 'pricelevel',
      field: 'pricelevel',
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
    private readonly storeService: StoreService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly pricelevelService: PricelevelService
  ) {}

  ngAfterViewInit(): void {
    this.storeService.query(this.dataTable.table);
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
    this.storeService.updateSelection([...event]);
  }

  handleEvent() {
    this.storeService.query(this.dataTable.table);
  }
}
