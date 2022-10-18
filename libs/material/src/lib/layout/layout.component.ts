import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import {
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';

import { map } from 'rxjs/operators';

import { LayoutMenu } from './layout-menu';
import { LAYOUT_MENU_TOKEN } from './providers';

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
  /**
   * Layout Menu
   */
  @Input() lm!: LayoutMenu;

  constructor(
    @Optional() @Inject(LAYOUT_MENU_TOKEN) layoutMenu: LayoutMenu,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.lm = layoutMenu;
  }

  ngOnInit(): void {}

  search(searchInput: HTMLInputElement) {
    console.log('Searching for ', searchInput.value);
  }

  mobileMenu() {
    return [
      ...(this.lm.MENU_BAR || []),
      ...(this.lm.BOTTOM_LEFT || []),
      ...(this.lm.BOTTOM_RIGHT || []),
      ...(this.lm.TOP_LEFT || []),
      ...(this.lm.TOP_RIGHT || []),
    ];
  }
}
