import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormModule } from 'material/form';
import { TableModule } from 'material/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { CreateStoreComponent } from './create-store/';
import { DeleteStoreComponent } from './delete-store/';
import { StoreComponent } from './store.component';
import { StoreService } from './store.service';
import { UpdateStoreComponent } from './update-store/';
import { ViewStoreComponent } from './view-store';

import { PricelevelService } from '../pricelevel';

@NgModule({
  declarations: [
    StoreComponent,
    CreateStoreComponent,
    UpdateStoreComponent,
    DeleteStoreComponent,
    ViewStoreComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FormModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
    RouterModule.forChild([
      {
        path: '',
        component: StoreComponent,
        children: [
          {
            title: 'View Store',
            path: '',
            component: ViewStoreComponent,
          },
          {
            title: 'Create Store',
            path: 'create',
            component: CreateStoreComponent,
          },
          {
            title: 'Update Store',
            path: 'update',
            component: UpdateStoreComponent,
          },
          {
            title: 'Delete Store',
            path: 'delete',
            component: DeleteStoreComponent,
          },
        ],
      },
    ]),
  ],
  providers: [
    StoreService,
    PricelevelService,
    ConfirmationService,
    MessageService,
  ],
})
export class StoreModule {}
