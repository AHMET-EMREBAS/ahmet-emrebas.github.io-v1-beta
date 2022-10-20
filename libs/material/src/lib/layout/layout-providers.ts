import { Provider } from '@angular/core';

import { LayoutManager } from './layout-menu';

export const LAYOUT_MANAGER_TOKEN = 'LAYOUT_MANAGER_TOKEN';
export function provideLayoutManager(value: LayoutManager): Provider {
  return {
    provide: LAYOUT_MANAGER_TOKEN,
    useValue: value,
  };
}
