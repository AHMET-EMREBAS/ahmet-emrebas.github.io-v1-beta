import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PrimeTableModule,
    MatPaginatorModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
