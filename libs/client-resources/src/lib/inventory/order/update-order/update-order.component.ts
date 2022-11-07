import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { OrderFormService } from '../order-form.service';
import { Order } from '../order.interface';
import { OrderService } from '../order.service';

@Component({
  selector: 'ae-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss'],
})
export class UpdateOrderComponent implements OnInit {
  item$!: Observable<Partial<Order>>;

  submitLabel = 'Update Order';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Order, InputAttributes>>;

  constructor(
    private readonly orderService: OrderService,
    private readonly route: ActivatedRoute,
    private readonly orderFormService: OrderFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.orderFormService.updateForm();
    this.formFields = this.orderFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.orderService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Order) {
    return this.formFields[name];
  }

  update(formValue: Partial<Order>, id: number) {
    this.orderService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
