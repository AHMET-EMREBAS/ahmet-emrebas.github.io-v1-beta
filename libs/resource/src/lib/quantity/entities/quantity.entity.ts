import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Quantity extends BaseEntity {
  @Column({ type: 'text', nullable: true }) quantity: string;
}
