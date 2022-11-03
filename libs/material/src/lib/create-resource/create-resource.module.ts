import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateResourceComponent } from './create-resource.component';

@NgModule({
  declarations: [CreateResourceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CreateResourceComponent }]),
  ],
})
export class CreateResourceModule {}
