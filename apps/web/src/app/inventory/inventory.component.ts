import {
  Component,
  OnInit,
} from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  primaryMenuItems: MenuItem[] = [
    {
      label: 'Main Resources',
      items: [
        { label: 'Product', routerLink: ['Product'] },
        { label: 'SKU', routerLink: ['SKU'] },
      ],
    },
    { separator: true },
    {
      label: 'Stock',
      items: [{ label: 'Quantity', routerLink: ['Quantity'] }],
    },
    { separator: true },
    {
      label: 'Pricing',
      items: [
        { label: 'Price', routerLink: ['Price'] },
        { label: 'Price Level', routerLink: ['Pricelevel'] },
        { label: 'Promotion', routerLink: ['Promotion'] },
      ],
    },
    { separator: true },
    {
      label: 'Sales',
      items: [
        { label: 'Transaction', routerLink: ['Transaction'] },
        { label: 'Order', routerLink: ['Order'] },
      ],
    },
    { separator: true },
    {
      label: 'Reports',
      items: [
        { label: 'Sale Report', routerLink: ['SaleReport'] },
        { label: 'Stock Analisis', routerLink: ['StockAnalisis'] },
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

  constructor() {}

  ngOnInit(): void {}
}
