import { Injectable } from '@angular/core';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { NgrxResourceService } from '../ngrx-resource';
import { Resource } from './resource';

@Injectable({ providedIn: 'root' })
export class ResourceService extends NgrxResourceService<Resource> {
  constructor(ef: EntityCollectionServiceElementsFactory) {
    super('Resource', ef);
  }
}
