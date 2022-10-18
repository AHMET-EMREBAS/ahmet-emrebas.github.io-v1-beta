import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';

import { FormInputComponent } from './form-input/form-input.component';
import { SetAttributeDirective } from './set-attribute.directive';

const modules = [
  CommonModule,
  SharedModule,
  ReactiveFormsModule,
  FormsModule,
  InputTextModule,
  InputTextareaModule,
  ButtonModule,
  CheckboxModule,
  MultiSelectModule,
  DropdownModule,
  PasswordModule,
];
@NgModule({
  declarations: [SetAttributeDirective, FormInputComponent],
  imports: modules,
  exports: [...modules, SetAttributeDirective, FormInputComponent],
})
export class FormModule {}
