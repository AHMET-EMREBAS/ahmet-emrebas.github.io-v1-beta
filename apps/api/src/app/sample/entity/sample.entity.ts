import { BaseEntity } from 'core/entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Sample extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: 'text' })
  name: string;
}
