import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';

import { SharedResourceModule } from 'material/resource';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, SharedResourceModule, MatStepperModule],
  exports: [AuthComponent],
})
export class AuthModule {}
