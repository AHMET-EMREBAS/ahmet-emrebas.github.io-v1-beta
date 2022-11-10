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

import { VariantService } from '../variant';

@Injectable()
export class ProductService extends NgrxDataService<Product> {
  public override columns: { header: string; field: keyof Product }[] = [
    { field: 'name', header: 'Name' },

    { field: 'description', header: 'Description' },

    { field: 'code', header: 'Code' },

    { field: 'category', header: 'Category' },

    { field: 'department', header: 'Department' },

    { field: 'variants', header: 'Variants' },
  ];

  public override globalFilterFields: string[] = [
    '[object Object]',

    '[object Object]',

    '[object Object]',

    '[object Object]',

    '[object Object]',

    '[object Object]',
  ];

  public override contextMenuItems: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => {
        this.router.navigate([
          '/product/update',
          this.contextMenuSelection?.id,
        ]);
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        this.router.navigate([
          '/product/delete',
          this.contextMenuSelection?.id,
        ]);
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

    public readonly categoryService: CategoryService,

    public readonly departmentService: DepartmentService,

    public readonly variantService: VariantService
  ) {
    super('Product', sef, httpClient, router, confirmService);
  }
}
