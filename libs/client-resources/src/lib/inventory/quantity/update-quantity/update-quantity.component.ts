import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { QuantityFormService } from '../quantity-form.service';
import { Quantity } from '../quantity.interface';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'ae-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.scss'],
})
export class UpdateQuantityComponent implements OnInit {
  item$!: Observable<Partial<Quantity>>;

  submitLabel = 'Update Quantity';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Quantity, InputAttributes>>;

  constructor(
    private readonly quantityService: QuantityService,
    private readonly route: ActivatedRoute,
    private readonly quantityFormService: QuantityFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.quantityFormService.updateForm();
    this.formFields = this.quantityFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.quantityService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Quantity) {
    return this.formFields[name];
  }

  update(formValue: Partial<Quantity>, id: number) {
    this.quantityService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
