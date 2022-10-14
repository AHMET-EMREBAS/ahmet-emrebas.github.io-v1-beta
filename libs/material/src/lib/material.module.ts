import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialComponent } from './material/material.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MaterialComponent,

        children: [
          {
            path: '',
            loadChildren: () => import('./layout').then((m) => m.LayoutModule),
          },
        ],
      },
    ]),
  ],
  declarations: [MaterialComponent],
})
export class MaterialModule {}
