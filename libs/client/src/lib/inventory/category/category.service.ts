import { Injectable } from '@angular/core';

import { IReadCategory } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class CategoryService extends NgrxBaseCollecitonService<
  Partial<IReadCategory>
> {
  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Category', sef);
  }
}
