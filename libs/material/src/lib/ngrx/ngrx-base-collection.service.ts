import { BehaviorSubject } from 'rxjs';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class NgrxBaseCollecitonService<
  T
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
    console.log(selectedItems);

    const updatedItem = selectedItems[0];
    // this.selections$.next(selectedItems);
    return updatedItem;
  }
}
