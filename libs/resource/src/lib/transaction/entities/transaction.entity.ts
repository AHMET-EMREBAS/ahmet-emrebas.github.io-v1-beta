import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Transaction extends BaseEntity {
  @Column({ type: 'text', nullable: true }) transaction: string;
}
