import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadMessage } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { MessageService } from '../message.service';

import { UserService } from '../../user';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.scss'],
})
export class UpdateMessageComponent implements AfterViewInit {
  title = 'Update Message';
  private itemToBeUpdated!: Partial<IReadMessage>;

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
    this.toService.getAll();
    this.fromService.getAll();
  }

  ngAfterViewInit(): void {
    const item = this.messageService.getItemToBeUpdated();
    if (item) {
      this.itemToBeUpdated = item;
      setFormGroupValue(this.formGroup, item);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.messageService.update({
        id: this.itemToBeUpdated.id,

        message: this.value('message'),

        to: this.value('to')?.id,

        from: this.value('from')?.id,
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
