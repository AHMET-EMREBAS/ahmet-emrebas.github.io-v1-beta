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

import { groupBy } from 'lodash';
import { InputOptions } from 'material/form';
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
    private readonly systemMessageService: SystemMessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.clearCache();
    this.userService.getAll();
  }

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.messageService.add({
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
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
