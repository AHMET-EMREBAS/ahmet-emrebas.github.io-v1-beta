import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'text', nullable: true }) product: string;
}
