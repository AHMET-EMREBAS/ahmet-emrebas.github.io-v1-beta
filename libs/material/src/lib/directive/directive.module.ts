import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScrollControlDirective } from './scroll-control';
import { ScrollIntoViewDirective } from './scroll-into-view';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollControlDirective, ScrollIntoViewDirective],
  exports: [ScrollControlDirective, ScrollIntoViewDirective],
})
export class DirectiveModule {}
