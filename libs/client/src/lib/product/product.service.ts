import { Injectable } from '@angular/core';

import {
  ICategory,
  IDepartment,
  IProduct,
} from 'common/inventory/interfaces';
import { NgrxBaseCollecitonService } from 'material/ngrx';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ProductService extends NgrxBaseCollecitonService<
  Partial<IProduct<ICategory, IDepartment>>
> {
  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Product', sef);
  }
}
