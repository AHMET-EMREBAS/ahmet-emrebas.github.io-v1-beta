import {
  BaseEntity,
  Column,
} from 'api-core';
import { Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity<User> {
  @Column({ type: 'text', unique: true, nullable: false, transform: '' })
  username: string;

  @Column({
    type: 'text',
    unique: true,
    nullable: false,
    transform: 'password',
  })
  password: string;

  @Column({ type: 'text', unique: true, nullable: true, transform: '' })
  pin: string;

  @Column({ type: 'text', unique: false, nullable: true, transform: 'json' })
  workhours: string;

  @Column({ type: 'text', nullable: true })
  permissions: string;
}
