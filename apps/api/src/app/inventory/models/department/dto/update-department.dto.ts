import { Expose, Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { ValidateNested } from 'class-validator';

import { IDepartment } from 'common/inventory/interfaces/department';

@InputType()
export class UpdateDepartmentDto implements Partial<IDepartment> {
  @Field()
  @Validations({
    type: 'string',

    minLength: 3,

    maxLength: 20,
  })
  @Expose()
  name: string;
}
