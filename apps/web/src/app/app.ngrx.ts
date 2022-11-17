import { EntityDataModuleConfig } from '@ngrx/data';
import { IdSelector } from '@ngrx/entity';

const selectId: IdSelector<any> = (item: any) => {
  return JSON.stringify(item);
};

export const entityDataModuleConfig: EntityDataModuleConfig = {
  pluralNames: {
    Product: 'Product',
    Category: 'Category',
    Department: 'Department',
    Sku: 'Sku',
    Quantity: 'Quantity',
    Store: 'Store',
    Pricelevel: 'Pricelevel',
    Price: 'Price',
    Message: 'Message',
    User: 'User',
    Permission: 'Permission',
  },
  entityMetadata: {
    Product: { selectId },
    Category: { selectId },
    Department: { selectId },
    Sku: { selectId },
    Quantity: { selectId },
    Store: { selectId },
    Pricelevel: { selectId },
    Price: { selectId },
    Message: { selectId },
    User: { selectId },
    Permission: { selectId },
  },
};
