import { Component } from '@angular/core';

import { MenuGroup } from 'material';

import { MyLayoutManager } from './layout-manager';

@Component({
  selector: 'ae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';

  constructor() {
    let i = 0;
    setInterval(() => {
      MyLayoutManager.update(MenuGroup.STATUS_BAR, 'bing', { badge: i + '' });

      i++;
    }, 2000);
  }
}
