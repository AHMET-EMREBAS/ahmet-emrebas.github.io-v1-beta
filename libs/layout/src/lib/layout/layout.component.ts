import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Output() menuEvent = new EventEmitter<string>();

  @Input() menubarItems: MenuItem[] = [
    {
      label: 'File',
      icon: 'pi pi-file',
      items: [
        { label: 'New', icon: 'pi pi-plus' },
        { separator: true },
        {
          label: 'Logout',
          icon: 'pi pi-times',
        },
      ],
    },
  ];

  @Input() primaryMenuItems: MenuItem[] = [
    {
      label: 'Resources',
      items: [
        { label: 'Products' },
        { label: 'Orders' },
        { label: 'Transactions' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
        { label: 'Reports' },
      ],
    },
  ];

  @Input() secondaryMenuItems: MenuItem[] = [
    {
      label: 'Secondary Menu',
      items: [
        { label: 'Secondary 1' },
        { label: 'Secondary 1' },
        { label: 'Secondary 1' },
        { label: 'Secondary 1' },
        { label: 'Secondary 1' },
        { label: 'Secondary 1' },
        { label: 'Secondary 1' },
        { label: 'Secondary 1' },
      ],
    },
  ];
  @Input() otherMenuItems: MenuItem[] = [
    {
      label: 'Other Menu',
      items: [
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
        { label: 'Other 1' },
      ],
    },
  ];
  @Input() featureMenuItems: MenuItem[] = [
    {
      label: 'Feature Menu',
      items: [
        { label: 'Feature 1' },
        { label: 'Feature 1' },
        { label: 'Feature 1' },
        { label: 'Feature 1' },
        { label: 'Feature 1' },
        { label: 'Feature 1' },
      ],
    },
  ];
}
