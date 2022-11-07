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

import { CreateDepartmentComponent } from './create-department';
import { DeleteDepartmentComponent } from './delete-department';
import { DepartmentFormService } from './department-form.service';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import {
  CanReadDepartmentGuard,
  CanWriteDepartmentGuard,
} from './department.guard';
import { DepartmentService } from './department.service';
import { TableViewDepartmentComponent } from './table-view-department';
import { UpdateDepartmentComponent } from './update-department';

@NgModule({
  declarations: [
    DepartmentComponent,
    TableViewDepartmentComponent,
    DeleteDepartmentComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
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
    DepartmentRoutingModule,
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
    DepartmentService,
    ConfirmationService,
    MessageService,
    CanWriteDepartmentGuard,
    CanReadDepartmentGuard,
    DepartmentFormService,

    {
      provide: NgrxDataService,
      useClass: DepartmentService,
    },
  ],
  exports: [],
})
export class DepartmentModule {}
