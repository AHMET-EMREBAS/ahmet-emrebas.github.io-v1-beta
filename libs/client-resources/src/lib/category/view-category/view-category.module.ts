import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewCategoryComponent } from './view-category.component';

@NgModule({
  declarations: [ViewCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ViewCategoryComponent }]),
  ],
})
export class ViewCategoryModule {}
