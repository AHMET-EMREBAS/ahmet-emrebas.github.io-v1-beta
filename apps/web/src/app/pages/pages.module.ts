import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
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
];
@NgModule({
  declarations: [PagesComponent],
  imports: PageModules,
})
export class PagesModule {}
