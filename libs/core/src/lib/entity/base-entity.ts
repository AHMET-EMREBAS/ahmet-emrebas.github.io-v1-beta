import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() udpatedAt: Date;
  @DeleteDateColumn() deletedAt: Date;

  @Column({ type: 'int', nullable: true }) updatedBy: number;
  @Column({ type: 'boolean', nullable: true }) active: boolean;
}
