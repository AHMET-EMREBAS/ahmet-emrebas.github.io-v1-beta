import { Component } from '@angular/core';

import {
  MegaMenuItem,
  MenuItem,
} from 'primeng/api';

@Component({
  selector: 'ae-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  megamenu: MegaMenuItem[] = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Mega 2' },
  ];
  menubar: MenuItem[] = [
    { automationId: 'mi-home', icon: 'pi pi-home', label: $localize`Home` },
    {
      automationId: 'mi-about',
      icon: 'pi pi-info-circle',
      label: $localize`About`,
    },
    {
      automationId: 'mi-contact',
      label: $localize`Contact`,
      icon: 'pi pi-envelop',

      items: [
        { automationId: 'mi-call', label: 'Call' },
        { automationId: 'mi-email', label: 'Email' },
      ],
    },
  ];
}
