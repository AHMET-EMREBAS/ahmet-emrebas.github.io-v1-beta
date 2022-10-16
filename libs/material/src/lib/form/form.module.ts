import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';

import { FormComponent } from './form.component';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { SetAttributeDirective } from './set-attribute.directive';

@NgModule({
  declarations: [FormComponent, InputWrapperComponent, SetAttributeDirective],
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
    SharedModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CheckboxModule,
    MultiSelectModule,
    DropdownModule,
    PasswordModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
