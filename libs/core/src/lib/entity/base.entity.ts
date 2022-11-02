import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 } from 'uuid';

export class BaseEntity {
  @PrimaryGeneratedColumn() id?: number;
  @Column({
    type: 'uuid',
    update: false,
    transformer: { to: () => v4(), from: (v) => v },
  })
  __uuid?: string;

  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
  @DeleteDateColumn() deletedAt?: Date;
}
