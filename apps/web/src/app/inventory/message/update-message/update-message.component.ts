import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadMessage } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { MessageService } from '../message.service';
import { firstValueFrom } from 'rxjs';

import { MessageService as SystemMessageService } from 'primeng/api';

import { groupBy } from 'material/utils';

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
    subject: new FormControl(undefined, [
      Validators.minLength(0),

      Validators.maxLength(50),
    ]),

    message: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(0),

      Validators.maxLength(400),
    ]),

    receiver: new FormControl(undefined, [Validators.required]),

    sender: new FormControl(undefined, []),
  });

  fields: InputOptions[] = [
    {
      name: 'subject',
      type: 'text',
      group: 'Subject',
      placeholder: 'subject',

      minLength: 0,

      maxLength: 50,
    },

    {
      name: 'message',
      type: 'textarea',
      group: 'Message',
      placeholder: 'message',

      required: true,

      minLength: 0,

      maxLength: 400,
    },

    {
      name: 'receiver',
      type: 'select',
      group: 'To',
      placeholder: 'Select User',
      asyncOptions: this.userService.entities$,
      optionValue: 'id',
      optionLabel: 'username',

      required: true,
    },

    {
      name: 'sender',
      type: 'select',
      group: 'Primary',
      placeholder: 'Select User',
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
    this.userService.clearCache();
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

        subject: this.value('subject'),

        message: this.value('message'),

        receiver: this.value('receiver'),

        sender: this.value('sender'),
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

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
