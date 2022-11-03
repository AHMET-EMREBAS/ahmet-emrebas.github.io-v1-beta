import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormModule } from 'material/form';
import { TextInputModule } from 'material/form/text-input';

import { CreateSampleRoutingModule } from './create-sample-routing.module';
import { CreateSampleComponent } from './create-sample.component';

@NgModule({
  declarations: [CreateSampleComponent],
  imports: [
    CommonModule,
    CreateSampleRoutingModule,
    FormModule,
    TextInputModule,
  ],
})
export class CreateSampleModule {}
