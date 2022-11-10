import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MultiSelectModule } from 'primeng/multiselect';

import { SharedInputModule } from '../shared-input';
import { SearchManyInputComponent } from './select-many-input.component';

@NgModule({
  declarations: [SearchManyInputComponent],
  imports: [CommonModule, MultiSelectModule, SharedInputModule],
  exports: [SearchManyInputComponent],
})
export class SearchManyInputModule {}
