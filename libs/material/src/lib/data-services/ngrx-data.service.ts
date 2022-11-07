import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  ConfirmationService,
  FilterMetadata,
  MenuItem,
} from 'primeng/api';
import { Table } from 'primeng/table';
import {
  BehaviorSubject,
  map,
  Observable,
} from 'rxjs';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export type FilterEvent<T> = {
  filteredValue: T[];
  filters: Record<keyof T, FilterMetadata[]> & { global: FilterMetadata };
};

export type SortEvent = { field: string; order: -1 | 1 | 0 };

export type PageEvent = { first: number; row: number };

export type QueryOptions = {
  first?: number;
  rows?: number;
  sortOrder?: number;
  sortField?: string;
  where?: string;
};

export class NgrxDataService<T> extends EntityCollectionServiceBase<T> {
  contextMenuSelection?: T;

  contextMenuItems: MenuItem[] = [
    {
      icon: 'pi pi-info-circle',
      label: 'Hi',
      command: () => {
        console.log(this.contextMenuSelection);
      },
    },
  ];

  selection!: T[];

  readonly searchControl = new FormControl('', Validators.maxLength(50));
  public columns: { header: string; field: string }[] = [];
  public globalFilterFields: string[] = ['uuid'];
  readonly actionButtonLock$ = new BehaviorSubject<boolean>(false);

  constructor(
    entityName: string,
    sef: EntityCollectionServiceElementsFactory,
    public readonly httpClient: HttpClient,
    public readonly router: Router,
    public readonly confirmService: ConfirmationService,
    public readonly subService?: NgrxDataService<any>
  ) {
    super(entityName, sef);
    setTimeout(() => {
      this.getWithQuery({ view: 'true' });
    }, 100);
  }
  lockActionButtons() {
    this.actionButtonLock$.next(true);
  }
  unlockActionButtons() {
    this.actionButtonLock$.next(false);
  }

  query(table: Table) {
    this.getWithQuery({
      take: table.rows + '',
      skip: table.first + '',
      sortField: table.sortField,
      sortOrder: table.sortOrder == 1 ? 'ASC' : 'DESC',
      view: 'true',
      where: JSON.stringify({
        global: { value: this.searchControl.value, matchMode: 'contains' },
        ...table.filters,
      }),
    });
  }

  count(): Observable<number> {
    return this.httpClient
      .patch(`/api/${this.entityName.toLowerCase()}/count`, {})
      .pipe(map((c) => c)) as Observable<number>;
  }

  isUniqueBy(key: string, value: any): Observable<any> {
    return this.httpClient
      .patch(`/api/${this.entityName.toLowerCase()}/unique`, { [key]: value })
      .pipe(map((c) => c));
  }

  canActivate(operation: string) {
    return this.httpClient.post<boolean>('/api/auth/can-activate', {
      resource: this.entityName.toLowerCase(),
      operation,
    });
  }
}
