import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UpdateSampleComponent } from './update-sample.component';

@NgModule({
  declarations: [UpdateSampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UpdateSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material/update-resource').then(
                (m) => m.UpdateResourceModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class UpdateSampleModule {}
