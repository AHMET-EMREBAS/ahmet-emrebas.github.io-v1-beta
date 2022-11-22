import { Expose, Type } from 'class-transformer';
import {
  IsNotEmpty,
  Max,
  MaxLength,
  Min,
  MinLength,
  IsNotEmptyObject,
  IsOptional,
  ValidateNested,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { IStore } from 'common/inventory/interfaces/store';

@InputType()
export class CreateStoreDto implements IStore<ID> {
  @Field()
  @ApiProperty({
    type: 'string',
    minLength: 2,
    maxLength: 30,

    required: false,
    nullable: true,
  })
  @MinLength(2)
  @MaxLength(30)
  @IsOptional()
  @Expose()
  name: string;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: true })
  @Expose()
  pricelevel: ID;
}
