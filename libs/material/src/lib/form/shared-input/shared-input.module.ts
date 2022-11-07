import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';

import { BaseInputComponent } from './base-input/base-input.component';
import { HiddenInputComponent } from './hidden-input/hidden-input.component';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { SetAttributeDirective } from './set-attribute.directive';

const modules = [FormsModule, ReactiveFormsModule, ButtonModule, TooltipModule];

@NgModule({
  declarations: [
    SetAttributeDirective,
    InputWrapperComponent,
    BaseInputComponent,
    HiddenInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    BadgeModule,
    ...modules,
  ],
  exports: [
    ...modules,
    SetAttributeDirective,
    InputWrapperComponent,
    HiddenInputComponent,
  ],
})
export class SharedInputModule {}
