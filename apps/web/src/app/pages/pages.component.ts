import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  menubar: MenuItem[] = [
    { automationId: 'mi-home', label: $localize`Home` },
    { automationId: 'mi-about', label: $localize`About` },
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
