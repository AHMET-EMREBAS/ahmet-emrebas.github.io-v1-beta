import {
  BaseDTO,
  Property,
} from 'api-core';
import {
  Exclude,
  Expose,
} from 'class-transformer';

@Exclude()
export class CategoryCreateDTO extends BaseDTO<CategoryCreateDTO> {
  @Expose()
  @Property({
    name: 'name',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  name: string;
}
