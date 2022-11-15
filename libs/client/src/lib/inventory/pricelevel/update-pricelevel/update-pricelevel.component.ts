import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadPricelevel } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { PricelevelService } from '../pricelevel.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-pricelevel',
  templateUrl: './update-pricelevel.component.html',
  styleUrls: ['./update-pricelevel.component.scss'],
})
export class UpdatePricelevelComponent implements AfterViewInit {
  title = 'Update Pricelevel';
  private itemToBeUpdated!: Partial<IReadPricelevel>;

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(20),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'name',

      required: true,

      minLength: 3,

      maxLength: 20,
    },
  ];

  constructor(
    private readonly pricelevelService: PricelevelService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.pricelevelService.getAll();
  }

  ngAfterViewInit(): void {
    const item = this.pricelevelService.getItemToBeUpdated();
    if (item) {
      this.itemToBeUpdated = item;
      setFormGroupValue(this.formGroup, item);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.pricelevelService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),
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
