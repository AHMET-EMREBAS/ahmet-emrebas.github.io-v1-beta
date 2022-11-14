import {
  Component,
  OnInit,
} from '@angular/core';

import { ColumnOption } from 'material/table';
import { take } from 'rxjs';

import { ProductService } from '../product.service';

@Component({
  selector: 'ae-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
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
  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    let i = 0;
    ' '
      .repeat(20)
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

  handleEvent(event: any) {
    console.log(event);
  }
}
