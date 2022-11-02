import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardViewResourceComponent } from './card-view-resource.component';

@NgModule({
  declarations: [CardViewResourceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CardViewResourceComponent }]),
  ],
})
export class CardViewResourceModule {}
