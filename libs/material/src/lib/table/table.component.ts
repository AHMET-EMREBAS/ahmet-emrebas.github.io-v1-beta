import {
  Component,
  Inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { EntityCollectionService } from '@ngrx/data';

import { ENTITY_COLLECTION_SERVICE_TOKEN } from '../tokens';
import {
  TABLE_OPTIONS_TOKEN,
  TableOptions,
} from './table.provider';

@Component({
  selector: 'ae-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  selectedItems: any;
  selectedcontextItem: any;
  searchControl = new FormControl('');

  constructor(
    @Inject(TABLE_OPTIONS_TOKEN) public readonly options: TableOptions,
    @Inject(ENTITY_COLLECTION_SERVICE_TOKEN)
    public readonly ds: EntityCollectionService<any>
  ) {}
}
