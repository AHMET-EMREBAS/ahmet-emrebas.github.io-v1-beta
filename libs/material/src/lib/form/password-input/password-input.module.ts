import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PasswordModule } from 'primeng/password';

import { SharedInputModule } from '../shared-input';
import { PasswordInputComponent } from './password-input.component';

@NgModule({
  declarations: [PasswordInputComponent],
  imports: [CommonModule, PasswordModule, SharedInputModule],
  exports: [PasswordInputComponent],
})
export class PasswordInputModule {}
