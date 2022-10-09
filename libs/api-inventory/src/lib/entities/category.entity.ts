import {
  CommonFields,
  ICategory,
} from 'commonjs';
import {
  EntitySchema,
  EntitySchemaColumnOptions,
  EntitySchemaOptions,
} from 'typeorm';

export const CategoryEntityOptions: EntitySchemaOptions<
  ICategory & CommonFields
> = {
  name: 'Category',
  columns: {
    id: {
      type: 'int',
      generated: true,
      primary: true,
    },
    name: {
      type: 'text',
      minLength: 3,
      maxLength: 20,
      unique: true,
    } as HTMLInputElement & EntitySchemaColumnOptions,
  },
};
export const CategoryEntity = new EntitySchema(CategoryEntityOptions);
