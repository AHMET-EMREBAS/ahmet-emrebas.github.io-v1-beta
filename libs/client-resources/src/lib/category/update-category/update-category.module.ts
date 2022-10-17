import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UpdateCategoryComponent } from './update-category.component';

@NgModule({
  declarations: [UpdateCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UpdateCategoryComponent }]),
  ],
})
export class UpdateCategoryModule {}
