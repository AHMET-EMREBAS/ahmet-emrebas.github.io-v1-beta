import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {
  ICategory,
  ICategoryKey,
  PartialICategory,
} from 'common/inventory/models';
import { InputAttributes } from 'material/form/shared-input';
import {
  map,
  Observable,
  switchMap,
} from 'rxjs';

import { CategoryFormService } from '../category-form.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ae-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {
  item$!: Observable<Partial<ICategory>>;

  submitLabel = 'Update Category';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof ICategory, InputAttributes>>;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly route: ActivatedRoute,
    private readonly categoryFormService: CategoryFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.categoryFormService.updateForm();
    this.formFields = this.categoryFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.categoryService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: ICategoryKey) {
    return this.formFields[name];
  }

  update(formValue: PartialICategory, id: number) {
    this.categoryService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
