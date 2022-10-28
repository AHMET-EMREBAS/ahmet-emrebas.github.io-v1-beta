import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ae-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: Record<string, any>[];
  @Input() globalFilterFields = ['id'];

  constructor() {}

  ngOnInit(): void {}

  columns() {
    return Object.keys(this.data[0]);
  }
}
