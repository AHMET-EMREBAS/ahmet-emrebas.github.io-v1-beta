import { ICategory } from 'common/inventory/interfaces/category';
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
export class Category extends BaseEntity implements ICategory {
  @Field()
  @Column({ type: 'date', nullable: false, unique: true })
  name: string;
}
