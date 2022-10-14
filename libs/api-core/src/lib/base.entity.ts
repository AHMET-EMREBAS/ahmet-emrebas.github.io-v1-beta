import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ViewColumn,
} from 'typeorm';

export class BaseEntity<T = any> {
  @PrimaryGeneratedColumn() id?: number;
  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
  @DeleteDateColumn() deletedAt?: Date;
  @Column({ type: 'boolean', default: true }) active?: boolean;
}

export class BaseViewEntity {
  @ViewColumn() id: number;
}
