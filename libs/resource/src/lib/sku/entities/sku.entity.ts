import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Sku extends BaseEntity {
  @Column({ type: 'text', nullable: true }) sku: string;
}
