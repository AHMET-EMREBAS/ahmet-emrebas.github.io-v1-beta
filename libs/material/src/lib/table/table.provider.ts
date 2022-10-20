import { Provider } from '@angular/core';

import { MenuItem } from 'primeng/api';

export const TABLE_OPTIONS_TOKEN = 'TABLE_OPTIONS_TOKEN';

export interface TableOptions {
  contextMenuItems: MenuItem[];
  columns: { header: string; field: string }[];
  globalFilterFields: string[];
}

export function provideTableOptions(options: TableOptions): Provider {
  return {
    provide: TABLE_OPTIONS_TOKEN,
    useValue: options,
  };
}
