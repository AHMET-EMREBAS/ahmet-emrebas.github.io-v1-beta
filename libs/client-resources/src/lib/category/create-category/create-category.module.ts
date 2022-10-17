import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateCategoryComponent } from './create-category.component';

@NgModule({
  declarations: [CreateCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CreateCategoryComponent }]),
  ],
})
export class CreateCategoryModule {}
