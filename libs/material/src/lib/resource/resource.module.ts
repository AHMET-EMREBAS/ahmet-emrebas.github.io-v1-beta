import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { ResourceComponent } from './resource.component';
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
          { path: 'create', component: CreateComponent },
          { path: 'delete', component: DeleteComponent },
          { path: 'update', component: UpdateComponent },
          { path: 'view', component: ViewComponent },
          { path: 'detail', component: DetailComponent },
        ],
      },
    ]),
  ],
})
export class ResourceModule {}
