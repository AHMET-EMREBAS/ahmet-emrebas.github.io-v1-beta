import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardViewSampleComponent } from './card-view-sample.component';

@NgModule({
  declarations: [CardViewSampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CardViewSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material').then((m) => m.CardViewResourceModule),
          },
        ],
      },
    ]),
  ],
})
export class CardViewSampleModule {}
