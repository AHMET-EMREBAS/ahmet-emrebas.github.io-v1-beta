import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule as AFormModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';

import { FormComponent } from './form.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [FormComponent, PasswordComponent],
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
    DropdownModule,
    InputNumberModule,
    StepsModule,
    TabMenuModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
