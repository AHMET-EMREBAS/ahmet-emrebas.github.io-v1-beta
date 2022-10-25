import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

export const PageModules = [
  CommonModule,
  SharedModule,
  PagesRoutingModule,
  MenubarModule,
  ButtonModule,
  InputTextModule,
];
@NgModule({
  declarations: [PagesComponent],
  imports: PageModules,
})
export class PagesModule {}
