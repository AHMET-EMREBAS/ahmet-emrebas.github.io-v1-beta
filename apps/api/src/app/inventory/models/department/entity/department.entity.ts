import { BaseEntity } from 'core/entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { ID } from 'core/dto';
import { hashPassword } from 'core/transformers';

import { IDepartment } from 'common/inventory/interfaces/department';

import { Field, ObjectType } from '@nestjs/graphql';

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
