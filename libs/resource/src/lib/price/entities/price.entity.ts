import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Price extends BaseEntity {
  @Column({ type: 'text', nullable: true }) price: string;
}
