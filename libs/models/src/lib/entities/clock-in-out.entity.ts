import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '../common';
import { User } from './user.entity';

@Entity()
export class Clockinout extends BaseEntity {
  @Expose()
  @CreateDateColumn({ update: false })
  start: Date;

  @Expose()
  @Column({ type: 'text', nullable: true })
  end: Date;

  @Expose()
  @ManyToOne(() => User, { eager: true })
  @JoinColumn()
  employee: User;
}
