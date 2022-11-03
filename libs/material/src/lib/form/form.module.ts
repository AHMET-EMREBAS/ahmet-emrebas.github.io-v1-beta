import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastModule } from 'primeng/toast';

import { FormComponent } from './form.component';
import { SharedInputModule } from './shared-input';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, SharedInputModule, ToastModule],
  exports: [FormComponent],
})
export class FormModule {}
