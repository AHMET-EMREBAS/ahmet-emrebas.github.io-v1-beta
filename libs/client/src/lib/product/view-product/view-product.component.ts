import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { ColumnOption } from 'material/table';
import { take } from 'rxjs';

import { ProductService } from '../product.service';

@Component({
  selector: 'ae-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  items$ = this.productService.entities$.pipe(take(20));
  columns: ColumnOption[] = [
    { header: 'id', field: 'id' },
    { header: 'UUID', field: 'uuid' },
    { header: 'Name', field: 'name' },
    { header: 'Description', field: 'description' },
    { header: 'Category', field: 'category' },
    { header: 'Department', field: 'department' },
    { header: 'Create Time', field: 'createdAt' },
    { header: 'Delete Time', field: 'deletedAt' },
  ];
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let i = 0;
    ' '
      .repeat(100)
      .split('')
      .forEach((e) => {
        i++;
        this.productService.addOneToCache({
          id: i,
          name: 'Name ' + i,
          description: 'Description ' + i,
        });
      });
  }

  handleEvent(event: any, name: 'sort' | 'page' | 'select' | 'filter') {
    console.log(event);
  }

  newItem() {
    this.router.navigate(['Create'], { relativeTo: this.route });
  }
}
