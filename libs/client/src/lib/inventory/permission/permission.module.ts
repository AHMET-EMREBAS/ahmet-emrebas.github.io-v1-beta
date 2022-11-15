import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormModule } from 'material/form';
import { TableModule } from 'material/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { CreatePermissionComponent } from './create-permission/';
import { DeletePermissionComponent } from './delete-permission/';
import { PermissionComponent } from './permission.component';
import { PermissionService } from './permission.service';
import { UpdatePermissionComponent } from './update-permission/';
import { ViewPermissionComponent } from './view-permission';

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
    TableModule,
    FormModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
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
  providers: [PermissionService, ConfirmationService, MessageService],
})
export class PermissionModule {}
