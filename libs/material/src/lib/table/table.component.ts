import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ae-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  data: Record<string, string>[] = [];
  columns: { header: string; field: string }[] = [
    { header: '#', field: 'id' },
    { header: 'uuid', field: 'uuid' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
