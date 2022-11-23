import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { InputOptions } from 'material/form';
import { groupBy } from 'material/utils';
import { MessageService as SystemMessageService } from 'primeng/api';

import { PricelevelService } from '../../pricelevel';
import { StoreService } from '../store.service';

@Component({
  selector: 'ae-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss'],
})
export class CreateStoreComponent implements OnInit {
  submitted = false;
  title = 'Create Store';
  formGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(2),

      Validators.maxLength(30),
    ]),

    pricelevel: new FormControl(undefined, []),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Store',
      placeholder: 'name',

      required: true,

      minLength: 2,

      maxLength: 30,
    },

    {
      name: 'pricelevel',
      type: 'select',
      group: 'Price Level',
      placeholder: 'name',
      asyncOptions: this.pricelevelService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly storeService: StoreService,
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly pricelevelService: PricelevelService
  ) {}

  ngOnInit(): void {
    this.pricelevelService.getAsOptions(['id', 'name']);
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.storeService.add({
          name: this.value('name'),

          pricelevel: this.value('pricelevel'),
        });
      } else {
        const e = Object.entries(this.formGroup.controls).filter(
          (e) => e[1].errors
        )[0];

        this.systemMessageService.add({
          key: 'resource',
          severity: 'error',
          summary: `${e[0]} field is not valid!`,
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
