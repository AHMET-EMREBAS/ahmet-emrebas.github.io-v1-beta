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

import { CreateResourceComponent } from './create-resource';
import { DeleteResourceComponent } from './delete-resource';
import { ResourceFormService } from './resource-form.service';
import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';
import { CanReadResourceGuard, CanWriteResourceGuard } from './resource.guard';
import { ResourceService } from './resource.service';
import { TableViewResourceComponent } from './table-view-resource';
import { UpdateResourceComponent } from './update-resource';

import { RadioInputModule } from 'material/form/radio-input';
import { SwitchInputModule } from 'material/form/switch-input';
import { NumberInputModule } from 'material/form/number-input';

@NgModule({
  declarations: [
    ResourceComponent,
    TableViewResourceComponent,
    DeleteResourceComponent,
    CreateResourceComponent,
    UpdateResourceComponent,
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule,
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
    ResourceService,
    ConfirmationService,
    MessageService,
    CanWriteResourceGuard,
    CanReadResourceGuard,
    ResourceFormService,

    {
      provide: NgrxDataService,
      useClass: ResourceService,
    },
  ],
  exports: [],
})
export class ResourceModule {}
