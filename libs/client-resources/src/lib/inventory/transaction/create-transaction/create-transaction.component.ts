import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { TransactionFormService } from '../transaction-form.service';
import { Transaction } from '../transaction.interface';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'ae-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss'],
})
export class CreateTransactionComponent implements OnInit {
  @Input() submitLabel = 'Save Transaction';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Transaction, InputAttributes>>;

  constructor(
    private readonly transactionService: TransactionService,
    private readonly transactionFormService: TransactionFormService
  ) {}

  formBuilder!: FormManager<Transaction>;

  ngOnInit(): void {
    this.formGroup = this.transactionFormService.createForm();
    this.formFields = this.transactionFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Transaction) {
    this.transactionService.add({ ...formValue });
  }

  field(name: keyof Transaction) {
    return this.formFields[name];
  }
}
