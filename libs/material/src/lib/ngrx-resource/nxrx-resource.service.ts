import { BehaviorSubject } from 'rxjs';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class NgrxResourceService<T> extends EntityCollectionServiceBase<T> {
  selectedItems$ = new BehaviorSubject<{ id: number }[]>([]);

  constructor(entityName: string, ef: EntityCollectionServiceElementsFactory) {
    super(entityName, ef);
  }

  save(formValue: T) {
    return this.add(formValue);
  }

  selectItem(item: { id: number }) {
    const items = this.selectedItems$.getValue().filter((e) => e.id != item.id);
    items.push(item);
    this.selectedItems$.next(items);
  }

  deselectItem(item: { id: number }) {
    this.selectedItems$.next(
      this.selectedItems$.getValue().filter((e) => e.id != item.id)
    );
  }
}
