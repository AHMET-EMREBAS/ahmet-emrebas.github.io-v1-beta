import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ae-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  title = 'Delete Product';
  constructor() {}

  ngOnInit(): void {}
}
