import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { ViewCategoryComponent } from './view-category.component';

@NgModule({
  declarations: [ViewCategoryComponent],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ContextMenuModule,
    RouterModule.forChild([{ path: '', component: ViewCategoryComponent }]),
  ],
})
export class ViewCategoryModule {}
