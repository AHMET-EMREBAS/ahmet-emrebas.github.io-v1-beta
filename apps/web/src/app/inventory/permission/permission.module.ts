import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreatePermissionComponent } from './create-permission/';
import { DeletePermissionComponent } from './delete-permission/';
import { PermissionComponent } from './permission.component';
import { PermissionService } from './permission.service';
import { UpdatePermissionComponent } from './update-permission/';
import { ViewPermissionComponent } from './view-permission';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

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
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: PermissionComponent,
        children: [
          {
            title: 'View Permission',
            path: '',
            component: ViewPermissionComponent,
            data: {
              permission: 'READ:PERMISSION',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Permission',
            path: 'create',
            component: CreatePermissionComponent,
            data: {
              permission: 'WRITE:PERMISSION',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Permission',
            path: 'update',
            component: UpdatePermissionComponent,
            data: {
              permission: 'WRITE:PERMISSION',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Permission',
            path: 'delete',
            component: DeletePermissionComponent,
            data: {
              permission: 'WRITE:PERMISSION',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [PermissionService],
})
export class PermissionModule {}
