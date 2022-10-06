import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';

import { IStore } from 'commonjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'ae-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent implements OnInit {
  columns = [
    { header: 'Name', field: 'name' },
    { header: 'Price Level', field: 'priceLevel' },
  ];

  stores$!: Observable<IStore[]>;
  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.stores$ = this.httpClient.get<IStore[]>(
      'http://localhost:3333/api/stores'
    );
  }
}
