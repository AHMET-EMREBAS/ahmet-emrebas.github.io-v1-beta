import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { IProduct } from 'common/inventory/interfaces/product';

import { Category } from '../../category';

import { Department } from '../../department';

@InputType()
export class UpdateProductDto
  implements Partial<IProduct<Category, Department>>
{
  @Field()
  @Validations({
    type: 'string',

    minLength: 0,

    maxLength: 50,
  })
  @Expose()
  name: string;

  @Field()
  @Validations({
    type: 'string',

    minLength: 3,

    maxLength: 500,
  })
  @Expose()
  description: string;

  @Field(() => Int)
  @Validations({ minimum: 1 })
  @Expose()
  category: Category;

  @Field(() => Int)
  @Validations({ minimum: 1 })
  @Expose()
  department: Department;
}
