import {
  Expose,
  Type,
} from 'class-transformer';
import {
  IsEmail,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { IUser } from 'common/inventory/interfaces/user';
import { ID } from 'core/dto';

import {
  Field,
  InputType,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateUserDto implements IUser<ID[]> {
  @Field()
  @ApiProperty({
    type: 'specific',

    format: 'email',
    required: false,
    nullable: true,
  })
  @IsEmail()
  @IsOptional()
  @Expose()
  username: string;

  @Field()
  @ApiProperty({
    type: 'specific',

    required: false,
    nullable: true,
  })
  @IsOptional()
  @Expose()
  password: string;

  @ApiProperty({ type: [ID] })
  @Field(() => [ID], { nullable: true })
  @Type(() => ID)
  @IsOptional({ each: true })
  @ValidateNested({ each: true })
  @Expose()
  permission: ID[];
}
