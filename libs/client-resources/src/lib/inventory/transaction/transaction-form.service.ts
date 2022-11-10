import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Transaction } from './transaction.interface';
import { TransactionService } from './transaction.service';

@Injectable()
export class TransactionFormService {
  private readonly formManager!: FormManager<Transaction>;

  constructor(private readonly transactionService: TransactionService) {
    this.formManager = new FormManager(transactionService);
    this.init();
  }

  private init() {
    this.formManager.add({
      id: 'transaction-complete-input',
      name: 'complete',
      inputType: 'select',
    });
  }

  createForm() {
    return this.formManager.newCreateForm();
  }

  updateForm() {
    return this.formManager.newUpdateForm();
  }

  createFormFields() {
    return this.formManager.getFields();
  }
  updateFormFields() {
    return this.formManager.getUpdateFields();
  }
}
