import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  bounceInOnEnterAnimation,
  bounceOutOnLeaveAnimation,
} from 'angular-animations';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    bounceInOnEnterAnimation({ anchor: 'enter', duration: 400 }),
    bounceOutOnLeaveAnimation({ anchor: 'leave', duration: 100 }),
  ],
})
export class LandingComponent implements OnInit {
  isMenuOpen = false;
  items: MenuItem[] = [
    { icon: 'pi pi-home', label: 'Welcome', command: () => this.goto('') },
    {
      icon: 'pi pi-microsoft',
      label: 'Solutions',
      command: () => this.goto('solutions'),
    },
    {
      icon: 'pi pi-envelope',
      label: 'Contact',
      command: () => this.goto('contact'),
    },
  ];

  menuItems: MenuItem[] = [
    {
      tooltip: 'LinkedIn',
      icon: 'pi pi-linkedin',
      command: () =>
        window.open('https://www.linkedin.com/in/ahmet-emrebas/', '__blank'),
    },
    {
      tooltip: 'GitHub',
      icon: 'pi pi-github',
      command: () => window.open('https://github.com/AHMET-EMREBAS', '__blank'),
    },
    {
      tooltip: 'Twitter',
      icon: 'pi pi-twitter',
      command: () => window.open('https://twitter.com/Authdare', '__blank'),
    },
  ];

  title = '';

  constructor(
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.title = window.document.title;
  }

  goto(p: string) {
    this.router.navigate([p], {
      relativeTo: this.activeRoute,
      preserveFragment: true,
    });
  }
}
