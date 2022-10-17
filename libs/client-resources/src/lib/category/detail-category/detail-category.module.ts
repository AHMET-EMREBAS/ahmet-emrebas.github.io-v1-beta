import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';

import { DetailCategoryComponent } from './detail-category.component';

@NgModule({
  declarations: [DetailCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DetailCategoryComponent }]),
    CardModule,
  ],
})
export class DetailCategoryModule {}
