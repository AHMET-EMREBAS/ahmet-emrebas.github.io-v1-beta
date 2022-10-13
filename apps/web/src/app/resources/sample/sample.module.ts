import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SampleComponent } from './sample.component';

@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SampleComponent }]),
  ],
})
export class SampleModule {}
