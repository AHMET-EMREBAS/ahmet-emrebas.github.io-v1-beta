import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchManyComponent } from './search-many.component';

@NgModule({
  declarations: [SearchManyComponent],
  imports: [CommonModule],
  exports: [SearchManyComponent],
})
export class SearchManyModule {}
