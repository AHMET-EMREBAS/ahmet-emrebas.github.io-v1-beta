import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class NgrxDataService<T> extends EntityCollectionServiceBase<T> {
  constructor(entityName: string, sef: EntityCollectionServiceElementsFactory) {
    super(entityName, sef);
  }

  hello() {
    return `Hello from , ${this.entityName}`;
  }
}
