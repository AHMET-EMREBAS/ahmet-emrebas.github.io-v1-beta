import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgrxDataService } from 'material/data-services';
import { ResourceLayoutModule } from 'material/resource-layout';
import {
  MessageService,
  SharedModule,
} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { SampleService } from './sample.service';

@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ResourceLayoutModule,
    SampleRoutingModule,
    ClipboardModule,
    TooltipModule,
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
