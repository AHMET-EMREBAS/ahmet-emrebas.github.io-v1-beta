import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { HttpClientService } from '../http-client';

export class DynamicTableService<
  T extends Record<string, any>
> extends EntityCollectionServiceBase<T> {
  entityCount$ = this.httpClient.get<number>(
    `${this.entityName.toLowerCase()}/func/count`
  );

  constructor(
    entityName: string,
    private readonly elementsFactory: EntityCollectionServiceElementsFactory,
    private readonly httpClient: HttpClientService
  ) {
    super(entityName, elementsFactory);
  }
}
