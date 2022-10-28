import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'primeng/api';

import { CrudComponent } from './crud.component';

@NgModule({
  declarations: [CrudComponent],
  imports: [CommonModule, SharedModule],
})
export class CrudModule {}
