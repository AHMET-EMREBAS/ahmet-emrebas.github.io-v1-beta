import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        title: 'Inventory Application',
        path: '',
        component: InventoryComponent,
      },
    ]),
  ],
})
export class InventoryModule {}
