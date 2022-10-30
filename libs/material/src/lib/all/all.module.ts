import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

const __modules = [
  SharedModule,
  ButtonModule,
  CalendarModule,
  InputMaskModule,
  InputTextModule,
  InputNumberModule,
  ToolbarModule,
  CheckboxModule,
  RadioButtonModule,
  ToolbarModule,
  TableModule,
  ReactiveFormsModule,
  FormsModule,
  MenuModule,
  SelectButtonModule,
  MultiSelectModule,
  DropdownModule,
  AccordionModule,
  MessageModule,
  ToastModule,
  ToggleButtonModule,
  TooltipModule,
  SpeedDialModule,
  MenubarModule,
  SidebarModule,
  CardModule,
  CalendarModule,
];
@NgModule({
  imports: [...__modules],
  exports: [...__modules],
})
export class AllModules {}
