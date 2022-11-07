import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn() id?: number;
  @Column({ type: 'text', update: false, unique: true }) uuid?: string;

  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
  @DeleteDateColumn() deletedAt?: Date;
}
