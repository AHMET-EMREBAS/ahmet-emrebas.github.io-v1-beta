import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckboxModule } from 'primeng/checkbox';

import { SharedInputModule } from '../shared-input';
import { CheckboxGroupInputComponent } from './checkbox-group-input.component';

@NgModule({
  declarations: [CheckboxGroupInputComponent],
  imports: [CommonModule, SharedInputModule, CheckboxModule],
  exports: [CheckboxGroupInputComponent],
})
export class CheckboxGroupInputModule {}
