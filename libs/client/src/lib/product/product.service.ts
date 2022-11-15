import { Injectable } from '@angular/core';

import {
  ICategory,
  IDepartment,
  IProduct,
} from 'common/inventory/interfaces';
import { NgrxBaseCollecitonService } from 'material/ngrx';
import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ProductService extends NgrxBaseCollecitonService<
  Partial<IProduct<ICategory, IDepartment>>
> {
  categories$ = of([
    { id: 1, name: 'Car' },
    {
      id: 2,
      name: 'Home living',
    },
  ]);
  departments$ = of([
    { id: 1, name: 'Car' },
    {
      id: 2,
      name: 'Home living',
    },
  ]);

  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Product', sef);
  }
}
