import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';

import { fadeInOnEnterAnimation } from 'angular-animations';
import { Table } from 'primeng/table';

import { NgrxDataService } from '../data-services';

@Component({
  selector: 'ae-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class CardViewComponent implements AfterViewInit {
  @ViewChild('PAGINATOR') paginator!: Table;
  private t!: any;

  constructor(public readonly ds: NgrxDataService<any>) {}
  ngAfterViewInit(): void {
    this.ds.query(this.paginator);
  }
  getPageData() {
    clearTimeout(this.t);
    this.t = setTimeout(() => {
      this.ds.clearCache();

      for (const d of this.ds.globalFilterFields) {
        this.paginator.filters[d] = [{}];
      }

      this.ds.query(this.paginator);
    }, 400);
  }

  trackBy() {
    return 'id';
  }
}
