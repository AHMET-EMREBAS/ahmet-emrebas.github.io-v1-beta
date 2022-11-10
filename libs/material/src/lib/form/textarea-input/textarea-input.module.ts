import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedInputModule } from '../shared-input';
import { TextareaInputComponent } from './textarea-input.component';

@NgModule({
  declarations: [TextareaInputComponent],
  imports: [CommonModule, SharedInputModule],
  exports: [TextareaInputComponent],
})
export class TextareaInputModule {}
