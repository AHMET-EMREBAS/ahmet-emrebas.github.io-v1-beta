import { Injectable } from '@angular/core';

import { IReadPricelevel } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class PricelevelService extends NgrxBaseCollecitonService<
  Partial<IReadPricelevel>
> {
  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Pricelevel', sef);
  }
}
