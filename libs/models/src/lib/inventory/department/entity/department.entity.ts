import { BaseEntity } from 'core/entity';
import { Column, Entity } from 'typeorm';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Department extends BaseEntity {
  @Field()
  @Column({ type: 'date', nullable: false, unique: true })
  name: string;
}
