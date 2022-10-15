import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class NgrxResourceService<T> extends EntityCollectionServiceBase<T> {
  constructor(entityName: string, ef: EntityCollectionServiceElementsFactory) {
    super(entityName, ef);
  }

  save(formValue: T) {
    return this.add(formValue);
  }
}
