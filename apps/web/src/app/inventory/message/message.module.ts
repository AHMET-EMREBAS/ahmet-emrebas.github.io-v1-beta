import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedResourceModule } from 'material/resource';

import { UserService } from '../user';
import { CreateMessageComponent } from './create-message/';
import { DeleteMessageComponent } from './delete-message/';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { UpdateMessageComponent } from './update-message/';
import { ViewMessageComponent } from './view-message';

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
  providers: [MessageService, UserService],
})
export class MessageModule {}
