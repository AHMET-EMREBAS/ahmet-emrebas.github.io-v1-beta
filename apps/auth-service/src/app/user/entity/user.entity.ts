import { PasswordTransformer } from 'transformers';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Sub } from '../../sub/entity/sub.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({})
  id: number;

  /**
   * Auto Generated uuid
   */
  @Column({
    generated: 'uuid',
    unique: true,
    update: false,
  })
  uuid: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({
    type: 'text',
    transformer: PasswordTransformer(),
  })
  password: string;

  @Column({ type: 'text', nullable: true })
  permisstion: string;

  @ManyToOne(() => Sub)
  @JoinColumn()
  sub: Sub;
}
