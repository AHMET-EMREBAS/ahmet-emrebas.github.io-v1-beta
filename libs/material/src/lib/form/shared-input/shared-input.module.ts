import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { SetAttributeDirective } from './set-attribute.directive';

const modules = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [SetAttributeDirective, InputWrapperComponent],
  imports: [CommonModule, ProgressSpinnerModule, ...modules],
  exports: [...modules, SetAttributeDirective, InputWrapperComponent],
})
export class SharedInputModule {}
