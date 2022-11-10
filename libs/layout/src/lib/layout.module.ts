import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    ToolbarModule,
    ButtonModule,
    MenubarModule,
    TooltipModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
