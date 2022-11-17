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
  IReadPermission,
  IReadUser,
} from 'common/inventory/interfaces';
import {
  ColumnOption,
  TableComponent,
} from 'material/table';

import { PermissionService } from '../../permission';
import { UserService } from '../user.service';

@Component({
  selector: 'ae-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements AfterViewInit {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  totalRecords$ = this.userService.allCount$;
  items$ = this.userService.entities$;

  columns: ColumnOption<IReadUser>[] = [
    {
      header: '#',
      field: 'id',
    },
    {
      header: 'UUID',
      field: 'uuid',
    },

    {
      header: 'username',
      field: 'username',
    },

    {
      header: 'password',
      field: 'password',
    },

    {
      header: 'permission',
      field: 'permission',
      mapper: (item?: IReadPermission) => item?.name,
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
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly permissionService: PermissionService
  ) {}

  ngAfterViewInit(): void {
    this.userService.query(this.dataTable.table);
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
    this.userService.updateSelection([...event]);
  }

  handleEvent() {
    this.userService.query(this.dataTable.table);
  }
}
