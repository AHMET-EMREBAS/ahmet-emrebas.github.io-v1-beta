import { datatype } from 'faker';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { Injectable } from '@nestjs/common';

import { Price } from '../models/price';
import { Pricelevel } from '../models/pricelevel';
import { Product } from '../models/product';
import { Quantity } from '../models/quantity';
import { Sku } from '../models/sku';
import { Store } from '../models/store';

@EventSubscriber()
@Injectable()
export class ProductBuilderSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Product;
  }

  async afterInsert({ manager, entity }: InsertEvent<any>): Promise<any> {
    const PRODUCT_ID = entity.id;

    const SkuRepo = manager.getRepository(Sku);
    const StoreRepo = manager.getRepository(Store);
    const PricelevelRepo = manager.getRepository(Pricelevel);
    const PriceRepo = manager.getRepository(Price);
    const QuantityRepo = manager.getRepository(Quantity);

    const stores = await StoreRepo.find();
    const priceLevels = await PricelevelRepo.find();
    let sku: Sku;

    try {
      sku = await SkuRepo.save({
        name: entity.name,
        barcode: datatype.number(999999999999) + 1000000000000 + '',
        product: { id: PRODUCT_ID } as any,
        description: 'Some description ',
      });
    } catch (err) {
      console.log(err);
    }

    for (const s of stores) {
      try {
        await QuantityRepo.save({
          quantity: entity.quantity || 0,
          sku: { id: sku.id },
          store: { id: s.id },
        });
      } catch (err) {
        console.log(err);
      }
    }

    for (const p of priceLevels) {
      try {
        await PriceRepo.save({
          price: entity.price || 0,
          cost: entity.cost || 0,
          sku: { id: sku.id },
          priceLevel: { id: p.id },
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
}
