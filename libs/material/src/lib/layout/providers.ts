import { Provider } from '@angular/core';

import { LayoutMenu } from './layout-menu';

export const LAYOUT_MENU_TOKEN = 'LAYOUT_MENU_TOKEN';
export function provideLayoutMenu(value: LayoutMenu): Provider {
  return {
    provide: LAYOUT_MENU_TOKEN,
    useValue: value,
  };
}
