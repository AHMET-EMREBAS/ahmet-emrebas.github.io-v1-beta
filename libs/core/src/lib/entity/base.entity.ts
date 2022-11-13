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
  @Field(() => Int, { nullable: true })
  id?: number;

  @Column({ type: 'text', unique: true, nullable: true })
  @Field(() => String, { nullable: true })
  uuid?: string;

  @CreateDateColumn()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @UpdateDateColumn()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @DeleteDateColumn()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Column({ default: true })
  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  version?: string;
}
