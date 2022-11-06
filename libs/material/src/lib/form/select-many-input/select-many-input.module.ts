import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MultiSelectModule } from 'primeng/multiselect';

import { SharedInputModule } from '../shared-input';
import { SelectManyInputComponent } from './select-many-input.component';

@NgModule({
  declarations: [SelectManyInputComponent],
  imports: [CommonModule, MultiSelectModule, SharedInputModule],
  exports: [SelectManyInputComponent],
})
export class SelectManyInputModule {}
