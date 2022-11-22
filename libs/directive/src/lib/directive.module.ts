import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  ScrollControlDirective,
  ScrollIntoViewDirective,
} from './directives';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollControlDirective, ScrollIntoViewDirective],
  exports: [ScrollControlDirective, ScrollIntoViewDirective],
})
export class DirectiveModule {}
