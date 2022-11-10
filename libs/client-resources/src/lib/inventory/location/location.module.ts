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

import { CreateLocationComponent } from './create-location';
import { DeleteLocationComponent } from './delete-location';
import { LocationFormService } from './location-form.service';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { CanReadLocationGuard, CanWriteLocationGuard } from './location.guard';
import { LocationService } from './location.service';
import { TableViewLocationComponent } from './table-view-location';
import { UpdateLocationComponent } from './update-location';
import { FormModule } from 'material/form';

import { TextInputModule } from 'material/form/text-input';

import { NumberInputModule } from 'material/form/number-input';

@NgModule({
  declarations: [
    LocationComponent,
    TableViewLocationComponent,
    DeleteLocationComponent,
    CreateLocationComponent,
    UpdateLocationComponent,
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
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

    NumberInputModule,
  ],

  providers: [
    LocationService,
    ConfirmationService,
    MessageService,
    CanWriteLocationGuard,
    CanReadLocationGuard,
    LocationFormService,

    {
      provide: NgrxDataService,
      useClass: LocationService,
    },
  ],
  exports: [],
})
export class LocationModule {}
