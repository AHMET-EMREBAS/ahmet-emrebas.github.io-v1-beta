import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreatePricelevelComponent } from './create-pricelevel/';
import { DeletePricelevelComponent } from './delete-pricelevel/';
import { PricelevelComponent } from './pricelevel.component';
import { PricelevelService } from './pricelevel.service';
import { UpdatePricelevelComponent } from './update-pricelevel/';
import { ViewPricelevelComponent } from './view-pricelevel';

import { SharedResourceModule } from 'material/resource';

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
    SharedResourceModule,
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
  providers: [PricelevelService],
})
export class PricelevelModule {}
