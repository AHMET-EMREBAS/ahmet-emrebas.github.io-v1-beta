import { Injectable } from '@angular/core';

import {
  ICategory,
  IDepartment,
  IProduct,
} from 'common/inventory/interfaces';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ProductService extends EntityCollectionServiceBase<
  IProduct<ICategory, IDepartment>
> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementsFactory);
  }
}
