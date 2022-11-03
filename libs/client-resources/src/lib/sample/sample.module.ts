import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';
import { ResourceLayoutModule } from 'material/resource-layout';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { SampleService } from './sample.service';

@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ResourceLayoutModule,
    SampleRoutingModule,
  ],

  providers: [
    SampleService,
    MessageService,
    {
      provide: NgrxDataService,
      useClass: SampleService,
    },
  ],
})
export class SampleModule {}
