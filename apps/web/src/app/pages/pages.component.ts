import {
  Component,
  OnInit,
} from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  menubar: MenuItem[] = [
    { label: $localize`Me` },
    { label: $localize`About!` },
    { label: $localize`Contact`, icon: 'pi pi-envelop' },
  ];

  ngOnInit(): void {
    console.log(PagesComponent.name + ' is initialized');
  }
}
