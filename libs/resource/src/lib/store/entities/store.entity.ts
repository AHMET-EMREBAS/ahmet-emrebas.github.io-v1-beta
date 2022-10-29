import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Store extends BaseEntity {
  @Column({ type: 'text', nullable: true }) store: string;
}
