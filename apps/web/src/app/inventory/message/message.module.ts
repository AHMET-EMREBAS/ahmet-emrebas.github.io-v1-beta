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

import { CreateMessageComponent } from './create-message/';
import { DeleteMessageComponent } from './delete-message/';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { UpdateMessageComponent } from './update-message/';
import { ViewMessageComponent } from './view-message';

import { UserService } from '../to';

import { UserService } from '../from';

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
        component: MessageComponent,
        children: [
          {
            title: 'View Message',
            path: '',
            component: ViewMessageComponent,
          },
          {
            title: 'Create Message',
            path: 'create',
            component: CreateMessageComponent,
          },
          {
            title: 'Update Message',
            path: 'update',
            component: UpdateMessageComponent,
          },
          {
            title: 'Delete Message',
            path: 'delete',
            component: DeleteMessageComponent,
          },
        ],
      },
    ]),
  ],
  providers: [
    MessageService,
    UserService,
    UserService,
    ConfirmationService,
    MessageService,
  ],
})
export class MessageModule {}
