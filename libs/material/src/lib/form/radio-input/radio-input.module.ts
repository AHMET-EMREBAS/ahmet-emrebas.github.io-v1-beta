import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedInputModule } from '../shared-input';
import { RadioInputComponent } from './radio-input.component';

@NgModule({
  declarations: [RadioInputComponent],
  imports: [CommonModule, SharedInputModule],
  exports: [RadioInputComponent],
})
export class RadioInputModule {}
