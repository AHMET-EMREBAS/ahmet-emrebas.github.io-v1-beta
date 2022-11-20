import { IDepartment } from 'common/inventory/interfaces/department';
import { BaseEntity } from 'core/entity';
import {
  Column,
  Entity,
} from 'typeorm';

import {
  Field,
  ObjectType,
} from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Department extends BaseEntity implements IDepartment {
  @Field()
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
    transformer: [],
  })
  name: string;
}
