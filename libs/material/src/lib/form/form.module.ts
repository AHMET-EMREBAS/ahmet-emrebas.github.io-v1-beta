import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule as AFormModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';

import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    AFormModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    CheckboxModule,
    MultiSelectModule,
    ButtonModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
