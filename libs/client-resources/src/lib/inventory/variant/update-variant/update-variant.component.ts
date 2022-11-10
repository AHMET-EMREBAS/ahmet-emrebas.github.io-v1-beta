import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import {
  map,
  Observable,
  switchMap,
} from 'rxjs';

import { VariantFormService } from '../variant-form.service';
import { Variant } from '../variant.interface';
import { VariantService } from '../variant.service';

@Component({
  selector: 'ae-update-variant',
  templateUrl: './update-variant.component.html',
  styleUrls: ['./update-variant.component.scss'],
})
export class UpdateVariantComponent implements OnInit {
  item$!: Observable<Partial<Variant>>;

  submitLabel = 'Update Variant';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Variant, InputAttributes>>;

  constructor(
    private readonly variantService: VariantService,
    private readonly route: ActivatedRoute,
    private readonly variantFormService: VariantFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.variantFormService.updateForm();
    this.formFields = this.variantFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.variantService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Variant) {
    return this.formFields[name];
  }

  update(formValue: Partial<Variant>, id: number) {
    this.variantService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
