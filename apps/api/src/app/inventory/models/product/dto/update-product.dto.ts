import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { ValidateNested } from 'class-validator';

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

    minLength: 3,

    maxLength: 50,
  })
  @Expose()
  name: string;

  @Field()
  @Validations({
    type: 'number',

    min: 0,

    max: 99999999999999,
  })
  @Expose()
  price: number;

  @Field()
  @Validations({
    type: 'number',

    min: 0,

    max: 99999999999999,
  })
  @Expose()
  cost: number;

  @Field()
  @Validations({
    type: 'string',

    minLength: 0,

    maxLength: 500,
  })
  @Expose()
  description: string;

  @Field(() => Int)
  @Validations({ min: 1 })
  @Expose()
  category: Category;

  @Field(() => Int)
  @Validations({ min: 1 })
  @Expose()
  department: Department;
}
