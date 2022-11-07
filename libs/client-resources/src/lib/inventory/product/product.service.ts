import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgrxDataService } from 'material/data-services';
import { ConfirmationService, MenuItem } from 'primeng/api';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Product } from './product.interface';

import { CategoryService } from '../category';

import { DepartmentService } from '../department';

@Injectable()
export class ProductService extends NgrxDataService<Product> {
  public override columns: { header: string; field: keyof Product }[] = [
    { field: '', header: '' },

    { field: '', header: '' },

    { field: '', header: '' },

    { field: '', header: '' },

    { field: '', header: '' },
  ];

  public override globalFilterFields: string[] = [
    id,

    uuid,

    name,

    category,

    description,
  ];

  public override contextMenuItems: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => {
        this.router.navigate(['update', this.contextMenuSelection?.id]);
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        this.router.navigate(['delete', this.contextMenuSelection?.id]);
      },
    },
    {
      separator: true,
    },
    {
      label: 'Copy',
      icon: 'pi pi-copy',
      command: () => {
        this.clipboard.copy(
          Object.entries(this.contextMenuSelection || {})
            .map(([key, value]) => `${key}:${value}`)
            .join('\n')
        );
      },
    },
  ];

  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient,
    private readonly clipboard: Clipboard,
    router: Router,
    confirmService: ConfirmationService,

    public readonly categoryService: CategoryService
  ) {
    super(
      'Product',
      sef,
      httpClient,
      router,
      confirmService,

      categoryService
    );
  }
}
