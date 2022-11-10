import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DirectiveModule } from 'directive';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { MessageService } from './messanger/message.service';
import { MessangerComponent } from './messanger/messanger.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    ButtonModule,
    A11yModule,
    RouterModule.forChild([{ path: '', component: MessangerComponent }]),
    InputTextModule,
    InputTextareaModule,
  ],
  declarations: [MessangerComponent],
  providers: [MessageService],
  exports: [MessangerComponent],
})
export class MessangerModule {}
