import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputNumberModule } from 'primeng/inputnumber';

import { SharedInputModule } from '../shared-input';
import { CurrencyInputComponent } from './currency-input.component';

@NgModule({
  declarations: [CurrencyInputComponent],
  imports: [CommonModule, SharedInputModule, InputNumberModule],
  exports: [CurrencyInputComponent],
})
export class CurrencyInputModule {}
