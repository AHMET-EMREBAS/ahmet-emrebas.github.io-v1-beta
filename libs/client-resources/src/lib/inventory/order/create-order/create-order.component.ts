import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { OrderFormService } from '../order-form.service';
import { Order } from '../order.interface';
import { OrderService } from '../order.service';

@Component({
  selector: 'ae-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  @Input() submitLabel = 'Save Order';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Order, InputAttributes>>;

  constructor(
    private readonly orderService: OrderService,
    private readonly orderFormService: OrderFormService
  ) {}

  formBuilder!: FormManager<Order>;

  ngOnInit(): void {
    this.formGroup = this.orderFormService.createForm();
    this.formFields = this.orderFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Order) {
    this.orderService.add({ ...formValue });
  }

  field(name: keyof Order) {
    return this.formFields[name];
  }
}
