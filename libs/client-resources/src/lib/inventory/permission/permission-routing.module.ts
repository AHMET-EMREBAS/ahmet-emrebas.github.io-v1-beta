import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePermissionComponent } from './create-permission';
import { DeletePermissionComponent } from './delete-permission';
import { PermissionComponent } from './permission.component';
import {
  CanReadPermissionGuard,
  CanWritePermissionGuard,
} from './permission.guard';
import { TableViewPermissionComponent } from './table-view-permission';
import { UpdatePermissionComponent } from './update-permission';

export const routes: Routes = [
  {
    path: '',
    component: PermissionComponent,

    children: [
      {
        title: 'View Permission',
        path: 'table-view',
        component: TableViewPermissionComponent,
        canActivate: [CanReadPermissionGuard],
      },
      {
        title: 'Create Permission',
        path: 'create',
        component: CreatePermissionComponent,
        canActivate: [CanWritePermissionGuard],
      },
      {
        title: 'Update Permission',
        path: 'update/:id',
        component: UpdatePermissionComponent,
      },
      {
        title: 'Delete Permission ',
        path: 'delete/:id',
        component: DeletePermissionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionRoutingModule {}
