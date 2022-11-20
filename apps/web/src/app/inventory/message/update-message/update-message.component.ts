import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadMessage } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { MessageService } from '../message.service';
import { firstValueFrom } from 'rxjs';

import { MessageService as SystemMessageService } from 'primeng/api';

import { groupBy } from 'lodash';

import { UserService } from '../../user';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.scss'],
})
export class UpdateMessageComponent implements AfterViewInit, OnInit {
  title = 'Update Message';
  private itemToBeUpdated!: Partial<IReadMessage>;

  formGroup = new FormGroup({
    message: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(0),

      Validators.maxLength(400),
    ]),

    to: new FormControl(undefined, []),

    from: new FormControl(undefined, []),
  });

  fields: InputOptions[] = [
    {
      name: 'message',
      type: 'text',
      group: 'Message',
      placeholder: 'message',

      required: true,

      minLength: 0,

      maxLength: 400,
    },

    {
      name: 'to',
      type: 'select',
      group: 'To',
      placeholder: 'to',
      asyncOptions: this.userService.entities$,
      optionValue: 'id',
      optionLabel: 'username',
    },

    {
      name: 'from',
      type: 'select',
      group: 'Primary',
      placeholder: 'from',
      asyncOptions: this.userService.entities$,
      optionValue: 'id',
      optionLabel: 'username',
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly messageService: MessageService,
    private readonly router: Router,
    private readonly systemMessageService: SystemMessageService,
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAsOptions(['id', 'username']);
  }

  async ngAfterViewInit() {
    const __item = this.messageService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.messageService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
      return;
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  submit() {
    if (this.formGroup.valid) {
      this.messageService.update({
        id: this.itemToBeUpdated.id,

        message: this.value('message'),

        to: this.value('to'),

        from: this.value('from'),
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
