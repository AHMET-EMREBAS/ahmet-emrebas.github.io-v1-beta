import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CreateCategoryComponent } from './create-category.component';

@NgModule({
  declarations: [CreateCategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: CreateCategoryComponent }]),
  ],
})
export class CreateCategoryModule {}
