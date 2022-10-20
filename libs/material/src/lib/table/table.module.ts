import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule as TM } from 'primeng/table';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TM,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ContextMenuModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
