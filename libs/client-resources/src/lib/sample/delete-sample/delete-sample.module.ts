import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConfirmationService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { DeleteSampleComponent } from './delete-sample.component';

@NgModule({
  declarations: [DeleteSampleComponent],
  imports: [
    CommonModule,

    ConfirmDialogModule,
    CardModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeleteSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material/delete-resource').then(
                (m) => m.DeleteResourceModule
              ),
          },
        ],
      },
    ]),
  ],
  providers: [ConfirmationService],
})
export class DeleteSampleModule {}
