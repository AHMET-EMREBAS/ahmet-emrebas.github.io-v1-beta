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

import { ICategory } from 'common/inventory/interfaces/category';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Category extends BaseEntity implements ICategory {
  @Field()
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
    transformer: [],
  })
  name: string;
}
