import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { DeleteCategoryComponent } from './delete-category.component';

@NgModule({
  declarations: [DeleteCategoryComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([{ path: '', component: DeleteCategoryComponent }]),
  ],
})
export class DeleteCategoryModule {}
