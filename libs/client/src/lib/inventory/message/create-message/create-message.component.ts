import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InputOptions } from 'material/form';

import { MessageService } from '../message.service';

import { UserService } from '../../to';

import { UserService } from '../../from';

@Component({
  selector: 'ae-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent {
  submitted = false;
  title = 'Create Message';
  formGroup = new FormGroup({
    message: new FormControl('', [
      Validators.required,

      Validators.minLength(0),

      Validators.maxLength(400),
    ]),

    to: new FormControl('', []),

    from: new FormControl('', []),
  });

  fields: InputOptions[] = [
    {
      name: 'message',
      type: 'text',
      placeholder: 'message',

      required: true,

      minLength: 0,

      maxLength: 400,
    },

    {
      name: 'to',
      type: 'select',
      placeholder: 'to',
      asyncOptions: this.toService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },

    {
      name: 'from',
      type: 'select',
      placeholder: 'from',
      asyncOptions: this.fromService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  constructor(
    private readonly messageService: MessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toService: UserService,
    private readonly fromService: UserService
  ) {
    this.messageService.getAll();
    this.toService.getAll();
    this.fromService.getAll();
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.messageService.add({
          message: this.value('message'),

          to: this.value('to')?.id,

          from: this.value('from')?.id,
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}