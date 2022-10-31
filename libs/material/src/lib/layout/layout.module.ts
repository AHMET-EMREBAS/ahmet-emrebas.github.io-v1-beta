import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AllModules } from '../all';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, AllModules],
  exports: [LayoutComponent, AllModules],
})
export class LayoutModule {}
