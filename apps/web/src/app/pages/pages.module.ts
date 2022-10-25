import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

export const PageModules = [
  CommonModule,
  SharedModule,
  PagesRoutingModule,
  MenubarModule,
  ButtonModule,
  InputTextModule,
  ToolbarModule,
  MegaMenuModule,
  BadgeModule,
  LayoutModule,
  SidebarModule,
  MultiSelectModule,
  FormsModule,
];
@NgModule({
  declarations: [PagesComponent],
  imports: PageModules,
})
export class PagesModule {}
