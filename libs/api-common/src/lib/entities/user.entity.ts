import {
  genSaltSync,
  hashSync,
} from 'bcrypt';
import {
  Exclude,
  Expose,
} from 'class-transformer';
import { IUser } from 'commonjs';
import {
  Column,
  Entity,
} from 'typeorm';

import { Property } from '../property';
import { BaseEntity } from './base.entity';

@Entity()
@Exclude()
export class User extends BaseEntity implements IUser {
  @Expose()
  @Property({
    type: 'string',
    inputType: 'email',
    email: true,
    minLength: 4,
    maxLength: 50,
  })
  @Column({ type: 'text', unique: true })
  username: string;

  @Expose()
  @Property({
    type: 'string',
    inputType: 'password',
    password: true,
  })
  @Column({
    type: 'text',
    transformer: {
      to: (value: string) => hashSync(value, genSaltSync(8)),
      from: (value: string) => value,
    },
  })
  password: string;

  @Expose()
  @Property({
    type: 'string',
    inputType: 'permissions',
  })
  @Column({ type: 'text' })
  permissions: string;
}
