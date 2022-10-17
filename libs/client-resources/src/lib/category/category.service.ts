import { Injectable } from '@angular/core';

import { NgrxResourceService } from 'material';
import { map } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { ICategory } from './category.interface';

@Injectable({ providedIn: 'root' })
export class CategoryService extends NgrxResourceService<ICategory> {
  constructor(ef: EntityCollectionServiceElementsFactory) {
    super('Category', ef);
  }

  getOneByIdFromCache(id: number) {
    return this.entities$.pipe(
      map((e) => e.filter((k) => k.id == id)),
      map((e) => e[0])
    );
  }
}
