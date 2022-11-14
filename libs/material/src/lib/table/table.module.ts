import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule as PrimeTableModule } from 'primeng/table';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    PrimeTableModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
