import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component } from '@angular/core';

import {
  map,
  shareReplay,
} from 'rxjs';

@Component({
  selector: 'ae-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  isHandset$ = this.breakpointObservers
    .observe([
      Breakpoints.Small,
      Breakpoints.XSmall,
      Breakpoints.Handset,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
    ])
    .pipe(
      map((e) => {
        return e.matches;
      }),
      shareReplay()
    );

  constructor(private readonly breakpointObservers: BreakpointObserver) {}
  search() {
    console.log('Searching...');
  }
}
