import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreatePermissionComponent } from './create-permission/';
import { DeletePermissionComponent } from './delete-permission/';
import { PermissionComponent } from './permission.component';
import { PermissionService } from './permission.service';
import { UpdatePermissionComponent } from './update-permission/';
import { ViewPermissionComponent } from './view-permission';

import { SharedResourceModule } from 'material/resource';

@NgModule({
  declarations: [
    PermissionComponent,
    CreatePermissionComponent,
    UpdatePermissionComponent,
    DeletePermissionComponent,
    ViewPermissionComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    RouterModule.forChild([
      {
        path: '',
        component: PermissionComponent,
        children: [
          {
            title: 'View Permission',
            path: '',
            component: ViewPermissionComponent,
          },
          {
            title: 'Create Permission',
            path: 'create',
            component: CreatePermissionComponent,
          },
          {
            title: 'Update Permission',
            path: 'update',
            component: UpdatePermissionComponent,
          },
          {
            title: 'Delete Permission',
            path: 'delete',
            component: DeletePermissionComponent,
          },
        ],
      },
    ]),
  ],
  providers: [PermissionService],
})
export class PermissionModule {}
