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

import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { IStore } from 'common/inventory/interfaces/store';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateStoreDto implements Partial<IStore<ID>> {
  @Field()
  @ApiProperty({
    type: 'string',
    minLength: 2,
    maxLength: 30,
  })
  @MinLength(2)
  @MaxLength(30)
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
