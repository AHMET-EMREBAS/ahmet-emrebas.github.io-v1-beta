import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { PriceFormService } from '../price-form.service';
import { Price } from '../price.interface';
import { PriceService } from '../price.service';

@Component({
  selector: 'ae-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.scss'],
})
export class UpdatePriceComponent implements OnInit {
  item$!: Observable<Partial<Price>>;

  submitLabel = 'Update Price';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Price, InputAttributes>>;

  constructor(
    private readonly priceService: PriceService,
    private readonly route: ActivatedRoute,
    private readonly priceFormService: PriceFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.priceFormService.updateForm();
    this.formFields = this.priceFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.priceService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Price) {
    return this.formFields[name];
  }

  update(formValue: Partial<Price>, id: number) {
    this.priceService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
