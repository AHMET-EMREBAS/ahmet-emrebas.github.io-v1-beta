import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds.createQueryBuilder().select('*').from('price', 'price');
  },
})
export class PriceView {
  @ViewColumn()
  cost: any;

  @ViewColumn()
  price: any;

  @ViewColumn()
  usedCost: any;

  @ViewColumn()
  usedPrice: any;
}
