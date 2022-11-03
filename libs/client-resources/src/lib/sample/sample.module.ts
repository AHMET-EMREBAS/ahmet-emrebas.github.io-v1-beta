import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';
import { ResourceLayoutModule } from 'material/resource-layout';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { SampleService } from './sample.service';

@NgModule({
  declarations: [SampleComponent],
  imports: [CommonModule, ResourceLayoutModule, SampleRoutingModule],

  providers: [
    {
      provide: NgrxDataService,
      useClass: SampleService,
    },
  ],
})
export class SampleModule {}