import { EntitySchema } from 'typeorm';

new EntitySchema<any>({
  name: 'Product',
  columns: {
    name: {
      type: 'text',

      unique: true,
    },
    description: {
      type: 'text',
      nullable: true,
    },
  },
  relations: {
    category: {
      type: 'many-to-one',
      target: 'category',
      joinColumn: true,
      nullable: true,
    },
  },
});
