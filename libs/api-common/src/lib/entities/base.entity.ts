import {
  CommonFields,
  IUser,
} from 'commonjs';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity implements CommonFields {
  @PrimaryGeneratedColumn() id: number;
  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
  @DeleteDateColumn() deletedAt?: Date;

  @Column({ type: 'int', nullable: true }) createdBy?: IUser;
  @Column({ type: 'int', nullable: true }) updatedBy?: IUser;
  @Column({ type: 'int', nullable: true }) deletedBy?: IUser;

  @Column({ type: 'int', nullable: true }) owner?: IUser;

  @Column({ type: 'boolean', default: true }) active?: boolean;
}
