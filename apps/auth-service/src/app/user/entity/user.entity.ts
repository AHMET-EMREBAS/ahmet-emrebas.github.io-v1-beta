import { PasswordTransformer } from 'transformers';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}
