import {
  LayoutManager,
  LayoutMenu,
} from 'material';

export const layoutMenuItems: LayoutMenu = {
  TOP_LEFT: [
    {
      label: 'Resources',
      items: [{ label: 'Products' }],
    },
  ],
  BOTTOM_LEFT: [
    {
      label: 'Profile',
    },
  ],
  TOP_RIGHT: [
    {
      label: 'Features',
    },
  ],
  BOTTOM_RIGHT: [
    {
      label: 'Config',
    },
  ],
  STATUS_BAR: [
    {
      icon: 'pi pi-bell',
      id: 'bing',
      label: 'Bing',
      styleClass: 'p-button-warning',
    },
    {
      icon: 'pi pi-envelope',
      label: 'Inbox',
      id: 'inbox',
      styleClass: 'p-button-primary',
      badge: '10',
    },
  ],
};

export const MyLayoutManager = new LayoutManager();

MyLayoutManager.setMenu(layoutMenuItems);
