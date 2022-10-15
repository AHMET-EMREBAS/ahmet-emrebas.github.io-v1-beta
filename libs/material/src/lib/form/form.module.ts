import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { BaseInputComponent } from './base-input/base-input.component';
import {
  CheckboxInputComponent,
} from './checkbox-input/checkbox-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import {
  DateTimeInputComponent,
} from './date-time-input/date-time-input.component';
import { EditorInputComponent } from './editor-input/editor-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { FormComponent } from './form.component';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import {
  TextareaInputComponent,
} from './textarea-input/textarea-input.component';

@NgModule({
  declarations: [
    FormComponent,
    InputWrapperComponent,
    TextInputComponent,
    TextareaInputComponent,
    EditorInputComponent,
    NumberInputComponent,
    SelectInputComponent,
    DateInputComponent,
    DateTimeInputComponent,
    CheckboxInputComponent,
    SwitchInputComponent,
    BaseInputComponent,
    EmailInputComponent,
    PhoneInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormComponent,
        children: [{ path: 'form', component: FormComponent }],
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
  ],
  exports: [
    FormComponent,
    InputWrapperComponent,
    TextInputComponent,
    TextareaInputComponent,
    EditorInputComponent,
    NumberInputComponent,
    SelectInputComponent,
    DateInputComponent,
    DateTimeInputComponent,
    CheckboxInputComponent,
    SwitchInputComponent,
    BaseInputComponent,
    FormComponent,
    InputWrapperComponent,
    TextInputComponent,
    TextareaInputComponent,
    EditorInputComponent,
    NumberInputComponent,
    SelectInputComponent,
    DateInputComponent,
    DateTimeInputComponent,
    CheckboxInputComponent,
    SwitchInputComponent,
    BaseInputComponent,
    EmailInputComponent,
    PhoneInputComponent,
  ],
})
export class FormModule {}
