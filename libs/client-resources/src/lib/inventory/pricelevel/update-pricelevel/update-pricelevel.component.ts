import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { PricelevelFormService } from '../pricelevel-form.service';
import { Pricelevel } from '../pricelevel.interface';
import { PricelevelService } from '../pricelevel.service';

@Component({
  selector: 'ae-update-pricelevel',
  templateUrl: './update-pricelevel.component.html',
  styleUrls: ['./update-pricelevel.component.scss'],
})
export class UpdatePricelevelComponent implements OnInit {
  item$!: Observable<Partial<Pricelevel>>;

  submitLabel = 'Update Pricelevel';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Pricelevel, InputAttributes>>;

  constructor(
    private readonly pricelevelService: PricelevelService,
    private readonly route: ActivatedRoute,
    private readonly pricelevelFormService: PricelevelFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.pricelevelFormService.updateForm();
    this.formFields = this.pricelevelFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.pricelevelService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Pricelevel) {
    return this.formFields[name];
  }

  update(formValue: Partial<Pricelevel>, id: number) {
    this.pricelevelService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
