import { Injectable } from '@angular/core';

import { ICategory } from 'common/inventory/interfaces';
import { NgrxBaseCollecitonService } from 'material/ngrx';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class CategoryService extends NgrxBaseCollecitonService<
  Partial<ICategory>
> {
  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Category', sef);
  }
}
