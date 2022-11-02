import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UpdateResourceComponent } from './update-resource.component';

@NgModule({
  declarations: [UpdateResourceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UpdateResourceComponent }]),
  ],
})
export class UpdateResourceModule {}
