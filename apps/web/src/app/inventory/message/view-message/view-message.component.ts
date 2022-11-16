import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  IReadMessage,
  IReadUser,
} from 'common/inventory/interfaces';
import {
  ColumnOption,
  TableComponent,
} from 'material/table';

import { UserService } from '../../user';
import { MessageService } from '../message.service';

@Component({
  selector: 'ae-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.scss'],
})
export class ViewMessageComponent implements AfterViewInit {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  totalRecords$ = this.messageService.allCount$;
  items$ = this.messageService.entities$;

  columns: ColumnOption<IReadMessage>[] = [
    {
      header: '#',
      field: 'id',
    },
    {
      header: 'UUID',
      field: 'uuid',
    },

    {
      header: 'message',
      field: 'message',
    },

    {
      header: 'to',
      field: 'to',
      mapper: (item?: IReadUser) => item?.username,
    },

    {
      header: 'from',
      field: 'from',
      mapper: (item?: IReadUser) => item?.username,
    },

    {
      header: 'Create Time',
      field: 'createdAt',
    },
    {
      header: 'Update Time',
      field: 'updatedAt',
    },
    {
      header: 'Delete Time',
      field: 'deletedAt',
    },
  ];

  constructor(
    private readonly messageService: MessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toService: UserService,
    private readonly fromService: UserService
  ) {}

  ngAfterViewInit(): void {
    this.messageService.query(this.dataTable.table);
  }

  newItem() {
    this.goTo('create');
  }

  editItems() {
    this.goTo('update');
  }

  deleteItems(event: any) {
    this.goTo('delete');
  }

  goTo(
    path: 'create' | 'update' | 'delete',
    queryParams?: Record<string, any>
  ) {
    this.router.navigate([path], { relativeTo: this.route, queryParams });
  }

  selectItems(event: any) {
    this.messageService.updateSelection([...event]);
  }

  handleEvent() {
    this.messageService.query(this.dataTable.table);
  }
}
