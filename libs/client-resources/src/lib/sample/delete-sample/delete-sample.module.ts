import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DeleteSampleComponent } from './delete-sample.component';

@NgModule({
  declarations: [DeleteSampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DeleteSampleModule }]),
  ],
})
export class DeleteSampleModule {}
