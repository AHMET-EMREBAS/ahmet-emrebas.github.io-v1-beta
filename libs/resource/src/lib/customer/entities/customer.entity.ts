import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
  @Column({ type: 'text', nullable: true }) customer: string;
}
