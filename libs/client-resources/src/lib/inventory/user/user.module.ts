import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';

import { ResourceLayoutModule } from 'material/resource-layout';
import { TableModule } from 'material/table';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { CreateUserComponent } from './create-user';
import { DeleteUserComponent } from './delete-user';
import { UserFormService } from './user-form.service';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CanReadUserGuard, CanWriteUserGuard } from './user.guard';
import { UserService } from './user.service';
import { TableViewUserComponent } from './table-view-user';
import { UpdateUserComponent } from './update-user';
import { FormModule } from 'material/form';

import { PermissionService } from '../permission';

import { EmailInputModule } from 'material/form/email-input';

import { PasswordInputModule } from 'material/form/password-input';

import { CheckboxGroupInputModule } from 'material/form/checkbox-group-input';

@NgModule({
  declarations: [
    UserComponent,
    TableViewUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TableModule,
    SharedModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ResourceLayoutModule,
    ClipboardModule,
    TooltipModule,
    ConfirmDialogModule,
    CardModule,
    FormModule,

    EmailInputModule,

    PasswordInputModule,

    CheckboxGroupInputModule,
  ],

  providers: [
    UserService,
    ConfirmationService,
    MessageService,
    CanWriteUserGuard,
    CanReadUserGuard,
    UserFormService,

    PermissionService,

    {
      provide: NgrxDataService,
      useClass: UserService,
    },
  ],
  exports: [],
})
export class UserModule {}
