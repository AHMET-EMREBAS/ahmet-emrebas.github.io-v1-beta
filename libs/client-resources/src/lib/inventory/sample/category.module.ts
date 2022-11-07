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

import { CreateCategoryComponent } from './create-category';
import { DeleteCategoryComponent } from './delete-category';
import { CategoryFormService } from './category-form.service';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CanReadCategoryGuard, CanWriteCategoryGuard } from './category.guard';
import { CategoryService } from './category.service';
import { TableViewCategoryComponent } from './table-view-category';
import { UpdateCategoryComponent } from './update-category';

@NgModule({
  declarations: [
    CategoryComponent,
    TableViewCategoryComponent,
    DeleteCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
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
    CategoryRoutingModule,
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
    CategoryService,
    ConfirmationService,
    MessageService,
    CanWriteCategoryGuard,
    CanReadCategoryGuard,
    CategoryFormService,
    {
      provide: NgrxDataService,
      useClass: CategoryService,
    },
  ],
  exports: [],
})
export class CategoryModule {}
