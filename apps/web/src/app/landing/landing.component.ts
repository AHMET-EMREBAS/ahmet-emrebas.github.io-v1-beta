import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
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
import { map } from 'rxjs';

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
  isHandset$ = this.bpo
    .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Handset])
    .pipe(
      map((r) => {
        return r.matches;
      })
    );
  isMenuOpen = false;

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
    private readonly activeRoute: ActivatedRoute,
    private readonly bpo: BreakpointObserver
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
