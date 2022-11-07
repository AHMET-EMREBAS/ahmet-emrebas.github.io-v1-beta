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
import {
  ConfirmationService,
  MessageService,
  SharedModule,
} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { CreateSampleComponent } from './create-sample';
import { DeleteSampleComponent } from './delete-sample';
import { SampleFormService } from './sample-form.service';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import {
  CanCreateSample,
  CanReadSample,
} from './sample.guard';
import { SampleService } from './sample.service';
import { TableViewSampleComponent } from './table-view-sample';
import { UpdateSampleComponent } from './update-sample';

@NgModule({
  declarations: [
    SampleComponent,
    TableViewSampleComponent,
    DeleteSampleComponent,
    CreateSampleComponent,
    UpdateSampleComponent,
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
    SampleRoutingModule,
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
    SampleService,
    ConfirmationService,
    MessageService,
    CanCreateSample,
    CanReadSample,
    SampleFormService,
    {
      provide: NgrxDataService,
      useClass: SampleService,
    },
  ],
  exports: [],
})
export class SampleModule {}
