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
  constructor(
    entityName: string,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(entityName, serviceElementsFactory);
  }

  updateSelection(items: T[]) {
    console.log('Updating selection ');
    console.log(items);
    this.selections$.next([...items]);

    console.log('Updated seelction ');
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
      this.removeOneFromCache(d);
    }
  }
}
