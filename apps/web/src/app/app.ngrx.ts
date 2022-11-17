import {
  EntityDataModuleConfig,
  EntityMetadata,
} from '@ngrx/data';

const defaultMetaData: Partial<EntityMetadata> = {
  sortComparer: (a, b) => 100,
  selectId: (item: any) => {
    // While reading the data, item.index is used,
    // Whiel writing the item.index is nulled, and actual item id is used.
    return item.index || item.id;
  },
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
    Product: defaultMetaData,
    Category: defaultMetaData,
    Department: defaultMetaData,
    Sku: defaultMetaData,
    Quantity: defaultMetaData,
    Store: defaultMetaData,
    Pricelevel: defaultMetaData,
    Price: defaultMetaData,
    Message: defaultMetaData,
    User: defaultMetaData,
    Permission: defaultMetaData,
  },
};
