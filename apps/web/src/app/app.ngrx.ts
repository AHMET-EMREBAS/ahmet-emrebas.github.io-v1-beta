import { EntityDataModuleConfig } from '@ngrx/data';

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
    Product: {},
    Category: {},
    Department: {},
    Sku: {},
    Quantity: {},
    Store: {},
    Pricelevel: {},
    Price: {},
    Message: {},
    User: {},
    Permission: {},
  },
};
