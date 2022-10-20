import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import {
  Component,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';

import { map } from 'rxjs/operators';

import { LayoutManager } from './layout-menu';
import { LAYOUT_MANAGER_TOKEN } from './layout-providers';

@Component({
  selector: 'aemat-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  readonly bigView$ = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((e) => {
        return !e.matches;
      })
    );

  constructor(
    @Optional() @Inject(LAYOUT_MANAGER_TOKEN) public lm: LayoutManager,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    console.log('init....');
  }

  search(searchInput: HTMLInputElement) {
    console.log('Searching for ', searchInput.value);
  }

  mobileMenu() {
    const m = this.lm.getMenu();
    return [
      ...(m.MENU_BAR || []),
      ...(m.BOTTOM_LEFT || []),
      ...(m.BOTTOM_RIGHT || []),
      ...(m.TOP_LEFT || []),
      ...(m.TOP_RIGHT || []),
    ];
  }
}
