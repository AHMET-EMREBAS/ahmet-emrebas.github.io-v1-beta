import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ICategory } from 'common/inventory/models';
import { NgrxDataService } from 'material/data-services';
import {
  ConfirmationService,
  MenuItem,
} from 'primeng/api';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class CategoryService extends NgrxDataService<ICategory> {
  public override columns: { header: string; field: keyof ICategory }[] = [
    { field: 'name', header: 'NAME' },
  ];

  public override globalFilterFields: string[] = ['id', 'uuid', 'name'];

  public override contextMenuItems: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => {
        this.router.navigate([
          '/category/update',
          this.contextMenuSelection?.id,
        ]);
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        this.router.navigate([
          '/category/delete',
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
    confirmService: ConfirmationService
  ) {
    super('Category', sef, httpClient, router, confirmService);
  }
}
