import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule as TM } from 'primeng/toolbar';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, SharedModule, ButtonModule, TM],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
