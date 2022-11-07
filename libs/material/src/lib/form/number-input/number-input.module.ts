import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputNumberModule } from 'primeng/inputnumber';

import { SharedInputModule } from '../shared-input';
import { NumberInputComponent } from './number-input.component';

@NgModule({
  declarations: [NumberInputComponent],
  imports: [CommonModule, SharedInputModule, InputNumberModule],
  exports: [NumberInputComponent],
})
export class NumberInputModule {}
