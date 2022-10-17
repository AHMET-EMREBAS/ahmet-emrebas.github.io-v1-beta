import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  ColumnOptions,
  EntitySchema,
  RelationOptions,
} from 'typeorm';

new EntitySchema({
  name: '',
  columns: {},
  relations: {
    name: {
      target: 'category',
      type: 'many-to-many',
    },
  },
});

@Exclude()
export class EntityFile {
  @Expose()
  columns: { [key: string]: ColumnOptions };

  @Expose()
  relations: { [key: string]: RelationOptions };
}
