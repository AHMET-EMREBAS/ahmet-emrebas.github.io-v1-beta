import { PasswordTransformer } from 'transformers';
import {
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Sub {
  @PrimaryGeneratedColumn() id: number;

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
}
