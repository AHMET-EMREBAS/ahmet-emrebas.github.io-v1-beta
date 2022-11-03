import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TextInputModule } from 'material/form/text-input';

import { CreateResourceComponent } from './create-resource.component';

@NgModule({
  declarations: [CreateResourceComponent],
  imports: [
    CommonModule,
    TextInputModule,
    RouterModule.forChild([{ path: '', component: CreateResourceComponent }]),
  ],
})
export class CreateResourceModule {}
