import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Transaction } from './transaction.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('transaction.id', 'id')
      .addSelect('transaction.uuid', 'uuid')

      .addSelect('transaction.complete', 'complete')

      .addSelect('transaction.createdAt', 'createdAt')

      .from(Transaction, 'transaction');
  },
})
export class TransactionView {
  @ViewColumn() id: number;
  @ViewColumn() uuid: number;

  @ViewColumn()
  complete: string;

  @ViewColumn()
  createdAt: string;
}
