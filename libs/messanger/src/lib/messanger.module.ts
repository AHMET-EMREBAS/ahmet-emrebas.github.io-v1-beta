import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MessangerComponent } from './messanger/messanger.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MessangerComponent }]),
  ],
  declarations: [MessangerComponent],
  exports: [MessangerComponent],
})
export class MessangerModule {}
