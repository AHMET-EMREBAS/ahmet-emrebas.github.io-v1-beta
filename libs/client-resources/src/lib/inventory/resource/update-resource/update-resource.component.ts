import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { ResourceFormService } from '../resource-form.service';
import { Resource } from '../resource.interface';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'ae-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.scss'],
})
export class UpdateResourceComponent implements OnInit {
  item$!: Observable<Partial<Resource>>;

  submitLabel = 'Update Resource';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Resource, InputAttributes>>;

  constructor(
    private readonly resourceService: ResourceService,
    private readonly route: ActivatedRoute,
    private readonly resourceFormService: ResourceFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.resourceFormService.updateForm();
    this.formFields = this.resourceFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.resourceService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Resource) {
    return this.formFields[name];
  }

  update(formValue: Partial<Resource>, id: number) {
    this.resourceService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
