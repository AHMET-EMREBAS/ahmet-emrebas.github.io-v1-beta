import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('price', 'price');
  },
})
export class PriceView {
  @ViewColumn()
  cost: number;

  @ViewColumn()
  price: number;

  @ViewColumn()
  usedCost: number;

  @ViewColumn()
  usedPrice: number;
}
