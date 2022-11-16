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

import { CreateDepartmentComponent } from './create-department/';
import { DeleteDepartmentComponent } from './delete-department/';
import { DepartmentComponent } from './department.component';
import { DepartmentService } from './department.service';
import { UpdateDepartmentComponent } from './update-department/';
import { ViewDepartmentComponent } from './view-department';

@NgModule({
  declarations: [
    DepartmentComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
    DeleteDepartmentComponent,
    ViewDepartmentComponent,
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
        component: DepartmentComponent,
        children: [
          {
            title: 'View Department',
            path: '',
            component: ViewDepartmentComponent,
          },
          {
            title: 'Create Department',
            path: 'create',
            component: CreateDepartmentComponent,
          },
          {
            title: 'Update Department',
            path: 'update',
            component: UpdateDepartmentComponent,
          },
          {
            title: 'Delete Department',
            path: 'delete',
            component: DeleteDepartmentComponent,
          },
        ],
      },
    ]),
  ],
  providers: [DepartmentService, ConfirmationService, MessageService],
})
export class DepartmentModule {}
