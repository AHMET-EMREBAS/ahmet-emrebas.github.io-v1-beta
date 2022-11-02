import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResourceLayoutModule } from 'material';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';

@NgModule({
  declarations: [SampleComponent],
  imports: [CommonModule, ResourceLayoutModule, SampleRoutingModule],
})
export class SampleModule {}
