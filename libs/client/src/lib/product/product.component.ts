import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

import { ProductService } from './product.service';

@Component({
  selector: 'ae-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly service: ProductService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.sub = this.service.entityActions$.subscribe((event) => {
      console.log(event);
      if (event.type.endsWith('add-one')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Created new product',
        });
        this.goHome();
      }
      if (event.type.endsWith('add-one/error')) {
        this.messageService.add({
          severity: 'warning',
          summary: 'Something went wrong creating the product',
        });
      }

      if (event.type.endsWith('update-one')) {
        this.messageService.add({
          severity: 'success',
          summary: 'Updated the product',
        });
        this.goHome();
      }
      if (event.type.endsWith('update-one/error')) {
        this.messageService.add({
          severity: 'warning',
          summary: 'Something went wrong updating the product',
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goHome() {
    this.router.navigate(['Inventory', 'Product']);
  }
}
