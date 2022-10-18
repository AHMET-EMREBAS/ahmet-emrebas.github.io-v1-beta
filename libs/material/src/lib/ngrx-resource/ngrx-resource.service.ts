import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class NgrxResourceService<
  T extends { id: number }
> extends EntityCollectionServiceBase<T> {
  constructor(entityName: string, ef: EntityCollectionServiceElementsFactory) {
    super(entityName, ef);
  }
}
