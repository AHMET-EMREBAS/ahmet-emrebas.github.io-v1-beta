import { MenuItem } from 'primeng/api';

export enum MenuGroup {
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  MENU_BAR = 'MENU_BAR',
  STATUS_BAR = 'STATUS_BAR',
}

export type LayoutMenu = Partial<Record<MenuGroup, MenuItem[]>>;

export class LayoutManager {
  private menu!: LayoutMenu;

  setMenu(menu: LayoutMenu) {
    this.menu = menu;
  }

  update(g: MenuGroup, id: string, nvalue: Partial<MenuItem>) {
    const item = this.menu[g]?.find((e) => e.id === id);
    if (item) Object.assign(item, nvalue);
  }

  updateBing(value: string) {
    this.update(MenuGroup.STATUS_BAR, 'bing', { badge: value });
  }

  getMenu() {
    return this.menu;
  }
}
