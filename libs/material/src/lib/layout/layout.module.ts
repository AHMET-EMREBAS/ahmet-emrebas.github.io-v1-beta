import { LayoutModule as LM } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';

import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LM,
    SharedModule,
    BadgeModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    ToolbarModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
