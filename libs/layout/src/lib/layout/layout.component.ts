import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { MenuItem } from 'primeng/api';
import {
  map,
  shareReplay,
} from 'rxjs';

@Component({
  selector: 'ae-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  leftSidebar = false;
  rightSidebar = false;

  @Output() bellClick = new EventEmitter();
  @Output() appsClick = new EventEmitter();
  @Output() messagesClick = new EventEmitter();
  @Output() settingClick = new EventEmitter();
  @Output() signoutEvent = new EventEmitter();

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
        { label: 'Transactions' },
      ],
    },
    {
      label: 'Statistics',
      items: [
        { label: 'Sales Report' },
        { label: 'Best Selling' },
        { label: 'Stock' },
      ],
    },
  ];

  @Input() secondaryMenuItems: MenuItem[] = [
    {
      label: 'Customers',
      items: [{ label: 'Balance' }, { label: 'Pricing' }],
    },
  ];
  isHandset$ = this.breakPointObserver
    .observe([
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Small,
      Breakpoints.XSmall,
    ])
    .pipe(
      map((r) => {
        return r.matches;
      }),
      shareReplay()
    );

  isNotHandset$ = this.isHandset$.pipe(map((r) => !r));

  constructor(
    private readonly breakPointObserver: BreakpointObserver,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}
}
