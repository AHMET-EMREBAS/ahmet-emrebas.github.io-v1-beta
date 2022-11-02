import { BaseEntity } from 'core';
import { PasswordTransformer } from 'transformers';
import {
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class Sub extends BaseEntity {
  @Column({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text', transformer: PasswordTransformer() })
  password: string;

  @Column({ type: 'text', nullable: true })
  permission: string;
}
