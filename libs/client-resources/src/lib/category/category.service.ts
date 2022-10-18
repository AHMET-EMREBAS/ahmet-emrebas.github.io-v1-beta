import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgrxResourceService } from 'material';
import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { map } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { ICategory } from './category.interface';

@Injectable({ providedIn: 'root' })
export class CategoryService extends NgrxResourceService<ICategory> {
  override globalFilterFields: string[] = ['id', 'name'];

  constructor(
    ef: EntityCollectionServiceElementsFactory,
    router: Router,
    messageService: MessageService,
    confirmService: ConfirmationService
  ) {
    super('Category', ef, router, confirmService, messageService);
  }

  getOneByIdFromCache(id: number) {
    return this.entities$.pipe(
      map((e) => e.filter((k) => k.id == id)),
      map((e) => e[0])
    );
  }
}
