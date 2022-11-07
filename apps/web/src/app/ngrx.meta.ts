import { EntityDataModuleConfig } from '@ngrx/data';

export const entityDataModuleConfig: EntityDataModuleConfig = {
  pluralNames: {
    Sample: 'Sample',
    Category: 'Category',
  },
  entityMetadata: {
    Sample: {},
    Category: {},
  },
};
