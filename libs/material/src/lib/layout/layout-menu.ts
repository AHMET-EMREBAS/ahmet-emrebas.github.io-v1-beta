import { MenuItem } from 'primeng/api';

export enum LayoutMenuPositions {
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  MENU_BAR = 'MENU_BAR',
}

export type LayoutMenu = Partial<Record<LayoutMenuPositions, MenuItem[]>>;
