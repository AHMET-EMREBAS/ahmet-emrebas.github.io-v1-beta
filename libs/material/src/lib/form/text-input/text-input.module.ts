import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';

import { SharedInputModule } from '../shared-input';
import { TextInputComponent } from './text-input.component';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, SharedInputModule, InputTextModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
