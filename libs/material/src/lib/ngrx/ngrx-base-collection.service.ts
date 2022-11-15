import { HttpClient } from '@angular/common/http';

import { BaseInterface } from 'common/base';
import { BehaviorSubject } from 'rxjs';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class NgrxBaseCollecitonService<
  T extends BaseInterface
> extends EntityCollectionServiceBase<T> {
  private readonly selections$ = new BehaviorSubject<T[]>([]);

  readonly allCount$ = this.httpClient?.patch(
    `/api/${this.entityName.toLowerCase()}/?query=count`,
    {}
  );

  constructor(
    entityName: string,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private readonly httpClient?: HttpClient
  ) {
    super(entityName, serviceElementsFactory);
  }

  updateSelection(items: T[]) {
    this.selections$.next([...items]);
    console.log(this.selections$.getValue());
  }

  getItemToBeUpdated() {
    const selectedItems = this.selections$.getValue();
    const updatedItem = selectedItems.pop();
    this.selections$.next(selectedItems);
    return updatedItem;
  }

  deleteItem() {
    const d = this.selections$.getValue().pop();
    if (d) {
      this.delete(d);
    }
  }
}
