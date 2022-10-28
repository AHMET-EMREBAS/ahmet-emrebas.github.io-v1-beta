import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CanBe } from '../meta/can-be-accessed.enum';

export class BaseEntity {
  @PrimaryGeneratedColumn() id?: number;
  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() udpatedAt?: Date;
  @DeleteDateColumn() deletedAt?: Date;

  @Column({ type: 'int', nullable: true, update: false }) createdBy?: number;
  @Column({ type: 'int', nullable: true }) updatedBy?: number;
  @Column({ type: 'int', nullable: true }) deletedBy?: number;
  @Column({ type: 'int', nullable: true }) lastSeenBy?: number;
  @Column({ type: 'int', nullable: true }) viewCount?: number;
  @Column({ type: 'text', nullable: true }) accessible?: CanBe;
}
