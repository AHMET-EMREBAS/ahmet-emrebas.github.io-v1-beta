import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionGuard } from '../../auth';
import { CreateMessageComponent } from './create-message/';
import { DeleteMessageComponent } from './delete-message/';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { UpdateMessageComponent } from './update-message/';
import { ViewMessageComponent } from './view-message';

import { SharedResourceModule } from 'material/resource';

import { MatStepperModule } from '@angular/material/stepper';

import { UserService } from '../user';

@NgModule({
  declarations: [
    MessageComponent,
    CreateMessageComponent,
    UpdateMessageComponent,
    DeleteMessageComponent,
    ViewMessageComponent,
  ],
  imports: [
    CommonModule,
    SharedResourceModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: MessageComponent,
        children: [
          {
            title: 'View Message',
            path: '',
            component: ViewMessageComponent,
            data: {
              permission: 'READ:MESSAGE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Create Message',
            path: 'create',
            component: CreateMessageComponent,
            data: {
              permission: 'WRITE:MESSAGE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Update Message',
            path: 'update',
            component: UpdateMessageComponent,
            data: {
              permission: 'WRITE:MESSAGE',
            },
            canActivate: [PermissionGuard],
          },
          {
            title: 'Delete Message',
            path: 'delete',
            component: DeleteMessageComponent,
            data: {
              permission: 'WRITE:MESSAGE',
            },
            canActivate: [PermissionGuard],
          },
        ],
      },
    ]),
  ],
  providers: [MessageService, UserService, UserService],
})
export class MessageModule {}
