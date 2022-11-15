import { Injectable } from '@angular/core';

import { IReadStore } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class StoreService extends NgrxBaseCollecitonService<
  Partial<IReadStore>
> {
  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Store', sef);
  }
}
