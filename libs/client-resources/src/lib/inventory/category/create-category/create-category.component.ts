import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import {
  ICategory,
  ICategoryKey,
} from 'common/inventory/models';
import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { CategoryFormService } from '../category-form.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ae-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  @Input() submitLabel = 'Save Category';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<ICategoryKey, InputAttributes>>;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly categoryFormService: CategoryFormService
  ) {}

  formBuilder!: FormManager<ICategory>;

  ngOnInit(): void {
    this.formGroup = this.categoryFormService.createForm();
    this.formFields = this.categoryFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: ICategory) {
    this.categoryService.add({ ...formValue });
  }

  field(name: keyof ICategory) {
    return this.formFields[name];
  }
}
