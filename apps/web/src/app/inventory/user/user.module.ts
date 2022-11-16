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

import { CreateUserComponent } from './create-user/';
import { DeleteUserComponent } from './delete-user/';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UpdateUserComponent } from './update-user/';
import { ViewUserComponent } from './view-user';

import { PermissionService } from '../permission';

@NgModule({
  declarations: [
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ViewUserComponent,
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
        component: UserComponent,
        children: [
          {
            title: 'View User',
            path: '',
            component: ViewUserComponent,
          },
          {
            title: 'Create User',
            path: 'create',
            component: CreateUserComponent,
          },
          {
            title: 'Update User',
            path: 'update',
            component: UpdateUserComponent,
          },
          {
            title: 'Delete User',
            path: 'delete',
            component: DeleteUserComponent,
          },
        ],
      },
    ]),
  ],
  providers: [
    UserService,
    PermissionService,
    ConfirmationService,
    MessageService,
  ],
})
export class UserModule {}
