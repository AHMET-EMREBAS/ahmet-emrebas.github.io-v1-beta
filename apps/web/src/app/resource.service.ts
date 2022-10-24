import { Injectable } from '@angular/core';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ResourceService extends EntityCollectionServiceBase<any> {
  constructor(ef: EntityCollectionServiceElementsFactory) {
    super('User', ef);
  }
}
