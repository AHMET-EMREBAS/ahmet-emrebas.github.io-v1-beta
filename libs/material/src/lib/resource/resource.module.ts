import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { ResourceComponent } from './resource.component';
import { ResourceService } from './resource.service';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    ResourceComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ViewComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResourceComponent,
        children: [
          { path: 'view', component: ViewComponent },
          { path: 'create', component: CreateComponent },
          { path: 'delete/:id', component: DeleteComponent },
          { path: 'update/:id', component: UpdateComponent },
          { path: 'detail/:id', component: DetailComponent },
        ],
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
  ],

  providers: [ResourceService],
})
export class ResourceModule {}
