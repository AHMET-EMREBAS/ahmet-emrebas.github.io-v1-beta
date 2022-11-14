export interface IPrice<Sku, Pricelevel> {
  price: number;

  cost: number;

  sku?: Sku;

  pricelevel?: Pricelevel;
}
