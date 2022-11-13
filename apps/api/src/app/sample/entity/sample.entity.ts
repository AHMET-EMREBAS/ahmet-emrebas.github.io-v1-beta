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
export class Sample extends BaseEntity {
  @Field(() => String)
  @Column({ type: 'text' })
  name: string;
}
