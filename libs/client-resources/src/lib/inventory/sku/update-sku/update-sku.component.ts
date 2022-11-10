import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { SkuFormService } from '../sku-form.service';
import { Sku } from '../sku.interface';
import { SkuService } from '../sku.service';

@Component({
  selector: 'ae-update-sku',
  templateUrl: './update-sku.component.html',
  styleUrls: ['./update-sku.component.scss'],
})
export class UpdateSkuComponent implements OnInit {
  item$!: Observable<Partial<Sku>>;

  submitLabel = 'Update Sku';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Sku, InputAttributes>>;

  constructor(
    private readonly skuService: SkuService,
    private readonly route: ActivatedRoute,
    private readonly skuFormService: SkuFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.skuFormService.updateForm();
    this.formFields = this.skuFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.skuService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Sku) {
    return this.formFields[name];
  }

  update(formValue: Partial<Sku>, id: number) {
    this.skuService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
