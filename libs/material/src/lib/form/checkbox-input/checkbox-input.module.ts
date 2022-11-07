import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckboxModule } from 'primeng/checkbox';

import { SharedInputModule } from '../shared-input';
import { CheckboxInputComponent } from './checkbox-input.component';

@NgModule({
  declarations: [CheckboxInputComponent],
  imports: [CommonModule, SharedInputModule, CheckboxModule],
  exports: [CheckboxInputComponent],
})
export class CheckboxInputModule {}
