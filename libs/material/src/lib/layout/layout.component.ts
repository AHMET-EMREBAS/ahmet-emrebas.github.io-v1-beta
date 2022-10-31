import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component } from '@angular/core';

import { map } from 'rxjs';

@Component({
  selector: 'ae-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isHandset$ = this.bo
    .observe([
      Breakpoints.Handset,
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.HandsetLandscape,
    ])
    .pipe(
      map((e) => {
        return e.matches;
      })
    );

  constructor(private readonly bo: BreakpointObserver) {}
}
