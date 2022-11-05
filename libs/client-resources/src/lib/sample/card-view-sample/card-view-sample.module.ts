import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardViewModule } from 'material/card-view';

import { CardViewSampleComponent } from './card-view-sample.component';

@NgModule({
  declarations: [CardViewSampleComponent],
  imports: [
    CommonModule,
    CardViewModule,
    RouterModule.forChild([
      {
        path: '',
        component: CardViewSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material/card-view-resource').then(
                (m) => m.CardViewResourceModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class CardViewSampleModule {}
