import { Component } from '@angular/core';

import { SampleService } from '../sample.service';

@Component({
  selector: 'ae-table-view-sample',
  templateUrl: './table-view-sample.component.html',
  styleUrls: ['./table-view-sample.component.scss'],
})
export class TableViewSampleComponent {
  columns = [
    { name: 'id', header: 'id' },
    { name: 'uuid', header: 'uuid' },
    { name: 'name', header: 'name' },
  ];
  globalFilterColumns = ['name'];

  constructor(private readonly service: SampleService) {}
}
