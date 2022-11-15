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

import { CreatePricelevelComponent } from './create-pricelevel/';
import { DeletePricelevelComponent } from './delete-pricelevel/';
import { PricelevelComponent } from './pricelevel.component';
import { PricelevelService } from './pricelevel.service';
import { UpdatePricelevelComponent } from './update-pricelevel/';
import { ViewPricelevelComponent } from './view-pricelevel';

@NgModule({
  declarations: [
    PricelevelComponent,
    CreatePricelevelComponent,
    UpdatePricelevelComponent,
    DeletePricelevelComponent,
    ViewPricelevelComponent,
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
        component: PricelevelComponent,
        children: [
          {
            title: 'View Pricelevel',
            path: '',
            component: ViewPricelevelComponent,
          },
          {
            title: 'Create Pricelevel',
            path: 'create',
            component: CreatePricelevelComponent,
          },
          {
            title: 'Update Pricelevel',
            path: 'update',
            component: UpdatePricelevelComponent,
          },
          {
            title: 'Delete Pricelevel',
            path: 'delete',
            component: DeletePricelevelComponent,
          },
        ],
      },
    ]),
  ],
  providers: [PricelevelService, ConfirmationService, MessageService],
})
export class PricelevelModule {}
