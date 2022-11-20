import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';

import { SharedResourceModule } from 'material/resource';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    InputTextModule,
    SharedResourceModule,
    MatStepperModule,
    ButtonModule,
    MatStepperModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
