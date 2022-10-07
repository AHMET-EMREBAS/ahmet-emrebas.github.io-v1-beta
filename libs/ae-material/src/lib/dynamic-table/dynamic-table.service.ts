import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class DynamicTableService<T> extends EntityCollectionServiceBase<T> {
  constructor(
    entityName: string,
    elementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(entityName, elementsFactory);
  }
}
