import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Order extends BaseEntity {
  @Column({ type: 'text', nullable: true }) order: string;
}
