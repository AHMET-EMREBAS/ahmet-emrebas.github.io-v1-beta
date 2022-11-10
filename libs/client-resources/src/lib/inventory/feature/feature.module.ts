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

import { CreateFeatureComponent } from './create-feature';
import { DeleteFeatureComponent } from './delete-feature';
import { FeatureFormService } from './feature-form.service';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { CanReadFeatureGuard, CanWriteFeatureGuard } from './feature.guard';
import { FeatureService } from './feature.service';
import { TableViewFeatureComponent } from './table-view-feature';
import { UpdateFeatureComponent } from './update-feature';
import { FormModule } from 'material/form';

import { TextInputModule } from 'material/form/text-input';

@NgModule({
  declarations: [
    FeatureComponent,
    TableViewFeatureComponent,
    DeleteFeatureComponent,
    CreateFeatureComponent,
    UpdateFeatureComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
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
    FeatureService,
    ConfirmationService,
    MessageService,
    CanWriteFeatureGuard,
    CanReadFeatureGuard,
    FeatureFormService,

    {
      provide: NgrxDataService,
      useClass: FeatureService,
    },
  ],
  exports: [],
})
export class FeatureModule {}
