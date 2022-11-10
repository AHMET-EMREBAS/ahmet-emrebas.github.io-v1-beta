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

import { CreateStoreComponent } from './create-store';
import { DeleteStoreComponent } from './delete-store';
import { StoreFormService } from './store-form.service';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CanReadStoreGuard, CanWriteStoreGuard } from './store.guard';
import { StoreService } from './store.service';
import { TableViewStoreComponent } from './table-view-store';
import { UpdateStoreComponent } from './update-store';
import { FormModule } from 'material/form';

import { TextInputModule } from 'material/form/text-input';

@NgModule({
  declarations: [
    StoreComponent,
    TableViewStoreComponent,
    DeleteStoreComponent,
    CreateStoreComponent,
    UpdateStoreComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
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
  ],

  providers: [
    StoreService,
    ConfirmationService,
    MessageService,
    CanWriteStoreGuard,
    CanReadStoreGuard,
    StoreFormService,

    {
      provide: NgrxDataService,
      useClass: StoreService,
    },
  ],
  exports: [],
})
export class StoreModule {}
