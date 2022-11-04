import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';

import { SharedInputModule } from '../shared-input';
import { EmailInputComponent } from './email-input.component';

@NgModule({
  declarations: [EmailInputComponent],
  imports: [CommonModule, SharedInputModule, InputTextModule],
})
export class EmailInputModule {}
