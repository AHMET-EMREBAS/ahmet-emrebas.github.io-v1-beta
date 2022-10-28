import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormModule } from 'material/form';
import { TableModule } from 'material/table';

import { ResourceManagerComponent } from './resource-manager.component';

@NgModule({
  declarations: [ResourceManagerComponent],
  imports: [
    CommonModule,
    TableModule,
    FormModule,

    RouterModule.forChild([{ path: '', component: ResourceManagerComponent }]),
  ],
})
export class ResourceManagerModule {}
