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

import { SetAttributeDirective } from './set-attribute.directive';

const modules = [
  FormsModule,
  SharedModule,
  ReactiveFormsModule,
  InputTextModule,
  InputTextareaModule,
  ButtonModule,
  CheckboxModule,
  MultiSelectModule,
  DropdownModule,
  PasswordModule,
];
@NgModule({
  declarations: [SetAttributeDirective],
  imports: modules,
  exports: [...modules, SetAttributeDirective],
})
export class FormModule {}
