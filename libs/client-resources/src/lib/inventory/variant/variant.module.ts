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

import { CreateVariantComponent } from './create-variant';
import { DeleteVariantComponent } from './delete-variant';
import { VariantFormService } from './variant-form.service';
import { VariantRoutingModule } from './variant-routing.module';
import { VariantComponent } from './variant.component';
import { CanReadVariantGuard, CanWriteVariantGuard } from './variant.guard';
import { VariantService } from './variant.service';
import { TableViewVariantComponent } from './table-view-variant';
import { UpdateVariantComponent } from './update-variant';

import { FeatureService } from '../feature';

import { RadioInputModule } from 'material/form/radio-input';
import { SwitchInputModule } from 'material/form/switch-input';
import { NumberInputModule } from 'material/form/number-input';

@NgModule({
  declarations: [
    VariantComponent,
    TableViewVariantComponent,
    DeleteVariantComponent,
    CreateVariantComponent,
    UpdateVariantComponent,
  ],
  imports: [
    CommonModule,
    VariantRoutingModule,
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
    VariantService,
    ConfirmationService,
    MessageService,
    CanWriteVariantGuard,
    CanReadVariantGuard,
    VariantFormService,

    FeatureService,

    {
      provide: NgrxDataService,
      useClass: VariantService,
    },
  ],
  exports: [],
})
export class VariantModule {}
