import {
  Component,
  OnInit,
} from '@angular/core';

import {
  MenuItem,
  PrimeIcons,
} from 'primeng/api';

@Component({
  selector: 'ahmet-emrebas-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  resourcesMenu: MenuItem[] = [
    {
      label: 'Resources',
      icon: PrimeIcons.DATABASE,
      items: [
        { routerLink: ['product'], label: 'Products', icon: PrimeIcons.LIST },
        { routerLink: ['sample'], label: 'Samples', icon: PrimeIcons.LIST },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  search(searchInput: HTMLInputElement) {
    console.log('Searching for ', searchInput.value);
  }
}
