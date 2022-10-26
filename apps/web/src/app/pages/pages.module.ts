import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

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
  TooltipModule,
  MenuModule,
  AvatarModule,
];
@NgModule({
  declarations: [
    PagesComponent,
    ProfileComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: PageModules,
})
export class PagesModule {}
