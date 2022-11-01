import { PasswordTransformer } from 'transformers';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
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

  @Column({ type: 'text' })
  permission: string;
}
