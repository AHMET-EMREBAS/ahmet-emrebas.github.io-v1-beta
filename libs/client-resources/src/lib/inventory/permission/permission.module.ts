import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';
import { CurrencyInputModule } from 'material/form/currency-input';
import { FormModule } from 'material/form/form.module';
import { SelectInputModule } from 'material/form/select-input';
import { TextInputModule } from 'material/form/text-input';
import { CheckboxInputModule } from 'material/form/checkbox-input';
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

import { CreatePermissionComponent } from './create-permission';
import { DeletePermissionComponent } from './delete-permission';
import { PermissionFormService } from './permission-form.service';
import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionComponent } from './permission.component';
import {
  CanReadPermissionGuard,
  CanWritePermissionGuard,
} from './permission.guard';
import { PermissionService } from './permission.service';
import { TableViewPermissionComponent } from './table-view-permission';
import { UpdatePermissionComponent } from './update-permission';

import { ResourceService } from '../resource';

import { RadioInputModule } from 'material/form/radio-input';
import { SwitchInputModule } from 'material/form/switch-input';
import { NumberInputModule } from 'material/form/number-input';

@NgModule({
  declarations: [
    PermissionComponent,
    TableViewPermissionComponent,
    DeletePermissionComponent,
    CreatePermissionComponent,
    UpdatePermissionComponent,
  ],
  imports: [
    CommonModule,
    PermissionRoutingModule,
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
    TextInputModule,
    SelectInputModule,
    CurrencyInputModule,
    CheckboxInputModule,
    RadioInputModule,
    SwitchInputModule,
    NumberInputModule,
  ],

  providers: [
    PermissionService,
    ConfirmationService,
    MessageService,
    CanWritePermissionGuard,
    CanReadPermissionGuard,
    PermissionFormService,

    ResourceService,

    {
      provide: NgrxDataService,
      useClass: PermissionService,
    },
  ],
  exports: [],
})
export class PermissionModule {}
