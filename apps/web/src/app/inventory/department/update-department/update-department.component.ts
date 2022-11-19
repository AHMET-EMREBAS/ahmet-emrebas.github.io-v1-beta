import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadDepartment } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { DepartmentService } from '../department.service';
import { firstValueFrom } from 'rxjs';

import { MessageService as SystemMessageService } from 'primeng/api';

import { groupBy } from 'lodash';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss'],
})
export class UpdateDepartmentComponent implements AfterViewInit, OnInit {
  title = 'Update Department';
  private itemToBeUpdated!: Partial<IReadDepartment>;

  formGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(20),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Department',
      placeholder: 'name',

      required: true,

      minLength: 3,

      maxLength: 20,
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly departmentService: DepartmentService,
    private readonly router: Router,
    private readonly systemMessageService: SystemMessageService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  async ngAfterViewInit() {
    const __item = this.departmentService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.departmentService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
      return;
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  submit() {
    if (this.formGroup.valid) {
      this.departmentService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),
      });
    } else {
      const e = Object.entries(this.formGroup.controls).filter(
        (e) => e[1].errors
      )[0];

      this.systemMessageService.add({
        severity: 'error',
        summary: `${e[0]} field is not valid!`,
      });
    }
  }

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
