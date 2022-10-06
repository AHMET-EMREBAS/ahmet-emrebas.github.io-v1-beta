import {
  genSaltSync,
  hashSync,
} from 'bcrypt';
import { IUser } from 'commonjs';
import {
  Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column({ type: 'text', unique: true })
  username: string;

  @Column({
    type: 'text',
    transformer: {
      to: (value: string) => hashSync(value, genSaltSync(8)),
      from: (value: string) => value,
    },
  })
  password: string;

  @Column({
    type: 'text',
    transformer: {
      to: (value) => value && JSON.stringify(value),
      from: (value) => value && JSON.parse(value),
    },
    nullable: true,
  })
  roles: string[];
}
