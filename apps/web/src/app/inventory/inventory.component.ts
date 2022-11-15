import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  primaryMenuItems: MenuItem[] = [
    {
      label: 'Main Resources',
      items: [
        { label: 'Product', routerLink: ['product'] },
        { label: 'SKU', routerLink: ['sku'] },
      ],
    },
    { separator: true },
    {
      label: 'Meta',

      items: [
        { label: 'Category', routerLink: ['category'] },
        { label: 'Department', routerLink: ['department'] },
      ],
    },
    { separator: true },
    {
      label: 'Stock',
      items: [{ label: 'Quantity', routerLink: ['quantity'] }],
    },
    { separator: true },
    {
      label: 'Pricing',
      items: [
        { label: 'Price', routerLink: ['Price'] },
        { label: 'Price Level', routerLink: ['pricelevel'] },
        { label: 'Promotion', routerLink: ['promotion'] },
      ],
    },
    { separator: true },
    {
      label: 'Sales',
      items: [
        { label: 'Transaction', routerLink: ['transaction'] },
        { label: 'Order', routerLink: ['Order'] },
      ],
    },
    { separator: true },
    {
      label: 'Reports',
      items: [
        { label: 'Sale Report', routerLink: ['salereport'] },
        { label: 'Stock Analisis', routerLink: ['stockanalisis'] },
      ],
    },
  ];

  secondaryMenuItems: MenuItem[] = [
    {
      label: 'Aministration',
      items: [
        { label: 'Employee', routerLink: ['Employee'] },
        { label: 'Customer', routerLink: ['Customer'] },
      ],
    },
  ];

  menubarItems: MenuItem[] = [];
}
