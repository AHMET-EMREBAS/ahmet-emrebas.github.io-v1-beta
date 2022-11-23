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

import { UserService } from '../../user';
import { MessageService } from '../message.service';

@Component({
  selector: 'ae-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent implements OnInit {
  submitted = false;
  title = 'Create Message';
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
      placeholder: 'username',
      asyncOptions: this.userService.entities$,
      optionValue: 'id',
      optionLabel: 'username',

      required: true,
    },

    {
      name: 'sender',
      type: 'select',
      group: 'Primary',
      placeholder: 'username',
      asyncOptions: this.userService.entities$,
      optionValue: 'id',
      optionLabel: 'username',
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

  constructor(
    private readonly messageService: MessageService,
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAsOptions(['id', 'username']);
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.messageService.add({
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
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
