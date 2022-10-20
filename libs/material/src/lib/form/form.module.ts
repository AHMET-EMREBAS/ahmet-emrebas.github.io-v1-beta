import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [FormComponent, InputComponent],
  imports: [CommonModule],
})
export class FormModule {}
