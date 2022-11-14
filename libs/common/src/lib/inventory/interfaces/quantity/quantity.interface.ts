export interface IQuantity<Sku, Store> {
  quantity: number;

  sku?: Sku;

  store?: Store;
}
