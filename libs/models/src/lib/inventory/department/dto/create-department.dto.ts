import { Expose } from 'class-transformer';
import { Field, InputType } from '@nestjs/graphql';
import { Validations } from 'core/validations';

@InputType()
export class CreateDepartmentDto {
  @Field()
  @Validations({
    type: 'string',

    minLength: 3,

    maxLength: 20,
  })
  @Expose()
  name: string;
}
