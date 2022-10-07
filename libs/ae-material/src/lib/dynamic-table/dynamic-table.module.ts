import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { DynamicTableComponent } from './dynamic-table.component';

@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    ContextMenuModule,
  ],
  exports: [DynamicTableComponent],
})
export class DynamicTableModule {}
