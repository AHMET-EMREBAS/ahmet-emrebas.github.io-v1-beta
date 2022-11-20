import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { FormModule } from 'material/form';
import { TableModule } from 'material/table';
import {
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
  ],
  exports: [
    TableModule,
    FormModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class SharedResourceModule {}
