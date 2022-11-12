import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import {
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @DeleteDateColumn()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => Boolean, { nullable: true })
  @Column({ default: true })
  active: boolean;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  version: string;
}
