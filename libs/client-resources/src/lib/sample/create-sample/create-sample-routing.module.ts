import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateSampleComponent } from './create-sample.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material/create-resource').then(
                (m) => m.CreateResourceModule
              ),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CreateSampleRoutingModule {}
