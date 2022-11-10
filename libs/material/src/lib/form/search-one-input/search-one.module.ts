import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedInputModule } from '../shared-input';
import { SearchOneComponent } from './search-one.component';

@NgModule({
  declarations: [SearchOneComponent],
  imports: [CommonModule, SharedInputModule],
  exports: [SearchOneComponent],
})
export class SearchOneInputModule {}
