import { EntityDataModuleConfig } from '@ngrx/data';

export const entityDataModuleConfig: EntityDataModuleConfig = {
  pluralNames: {
    Product: 'Product',
    Category: 'Category',
    Department: 'Department',
  },
  entityMetadata: {
    Product: {},
    Category: {},
    Department: {},
  },
};
