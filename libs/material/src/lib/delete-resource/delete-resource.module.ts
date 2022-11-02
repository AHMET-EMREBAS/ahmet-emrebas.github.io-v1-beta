import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DeleteResourceComponent } from './delete-resource.component';

@NgModule({
  declarations: [DeleteResourceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DeleteResourceComponent }]),
  ],
})
export class DeleteResourceModule {}
