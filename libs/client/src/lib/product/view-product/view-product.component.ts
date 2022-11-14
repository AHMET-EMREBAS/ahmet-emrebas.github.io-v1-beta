import {
  Component,
  OnInit,
} from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'ae-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  items$ = this.productService.entities$;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.addOneToCache({
      id: 1,
      description: 'hello there',
      name: 'SOme 1 ',
    });
  }
}
