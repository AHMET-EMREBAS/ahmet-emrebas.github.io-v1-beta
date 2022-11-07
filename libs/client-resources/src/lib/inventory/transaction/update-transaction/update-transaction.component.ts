import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { TransactionFormService } from '../transaction-form.service';
import { Transaction } from '../transaction.interface';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'ae-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.scss'],
})
export class UpdateTransactionComponent implements OnInit {
  item$!: Observable<Partial<Transaction>>;

  submitLabel = 'Update Transaction';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Transaction, InputAttributes>>;

  constructor(
    private readonly transactionService: TransactionService,
    private readonly route: ActivatedRoute,
    private readonly transactionFormService: TransactionFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.transactionFormService.updateForm();
    this.formFields = this.transactionFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.transactionService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Transaction) {
    return this.formFields[name];
  }

  update(formValue: Partial<Transaction>, id: number) {
    this.transactionService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
