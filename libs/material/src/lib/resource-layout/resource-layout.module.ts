import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { ResourceLayoutComponent } from './resource-layout.component';

@NgModule({
  declarations: [ResourceLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TooltipModule,
    ToolbarModule,
    ButtonModule,
  ],
  exports: [ResourceLayoutComponent],
})
export class ResourceLayoutModule {}
