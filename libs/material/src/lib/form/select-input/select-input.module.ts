import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MultiSelectModule } from 'primeng/multiselect';

import { SharedInputModule } from '../shared-input';
import { SelectInputComponent } from './select-input.component';

@NgModule({
  declarations: [SelectInputComponent],
  imports: [CommonModule, SharedInputModule, MultiSelectModule],
  exports: [SelectInputComponent],
})
export class SelectInputModule {}
