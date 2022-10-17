import { EntityDataModuleConfig } from '@ngrx/data';

export const entityDataModuleConfig: EntityDataModuleConfig = {
  pluralNames: {
    Resource: 'Resources',
    Category: 'Categories',
  },
  entityMetadata: {
    Resource: {},
    Category: {},
  },
};
