import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';
import { CurrencyInputModule } from 'material/form/currency-input';
import { FormModule } from 'material/form/form.module';
import { SelectInputModule } from 'material/form/select-input';
import { TextInputModule } from 'material/form/text-input';
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

import { CreatePricelevelComponent } from './create-pricelevel';
import { DeletePricelevelComponent } from './delete-pricelevel';
import { PricelevelFormService } from './pricelevel-form.service';
import { PricelevelRoutingModule } from './pricelevel-routing.module';
import { PricelevelComponent } from './pricelevel.component';
import {
  CanReadPricelevelGuard,
  CanWritePricelevelGuard,
} from './pricelevel.guard';
import { PricelevelService } from './pricelevel.service';
import { TableViewPricelevelComponent } from './table-view-pricelevel';
import { UpdatePricelevelComponent } from './update-pricelevel';

@NgModule({
  declarations: [
    PricelevelComponent,
    TableViewPricelevelComponent,
    DeletePricelevelComponent,
    CreatePricelevelComponent,
    UpdatePricelevelComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    SharedModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ResourceLayoutModule,
    PricelevelRoutingModule,
    ClipboardModule,
    TooltipModule,
    ConfirmDialogModule,
    CardModule,
    FormModule,
    TextInputModule,
    SelectInputModule,
    CurrencyInputModule,
  ],

  providers: [
    PricelevelService,
    ConfirmationService,
    MessageService,
    CanWritePricelevelGuard,
    CanReadPricelevelGuard,
    PricelevelFormService,

    {
      provide: NgrxDataService,
      useClass: PricelevelService,
    },
  ],
  exports: [],
})
export class PricelevelModule {}
