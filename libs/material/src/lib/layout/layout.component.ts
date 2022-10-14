import {
  Component,
  OnInit,
} from '@angular/core';

import {
  MenuItem,
  PrimeIcons,
} from 'primeng/api';

@Component({
  selector: 'aemat-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  resourcesMenu: MenuItem[] = [
    {
      label: 'Resources',
      icon: PrimeIcons.DATABASE,
      items: ['auth', 'form', 'resource', 'table'].map((e) => {
        return { routerLink: [e], label: e };
      }),
    },
  ];

  configMenu: MenuItem[] = [
    {
      label: 'Config',
      icon: PrimeIcons.COG,
      items: [{ label: 'Add config links here' }],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  search(searchInput: HTMLInputElement) {
    console.log('Searching for ', searchInput.value);
  }
}
