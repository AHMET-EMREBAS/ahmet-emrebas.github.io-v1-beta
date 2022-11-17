import {
  EntityDataModuleConfig,
  EntityMetadata,
} from '@ngrx/data';

const defaultMetaData: Partial<EntityMetadata> = {
  selectId: (item) => item.index || item.id,
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
