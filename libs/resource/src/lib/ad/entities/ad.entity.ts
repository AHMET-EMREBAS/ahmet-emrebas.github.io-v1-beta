import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Ad extends BaseEntity {
  @Column({ type: 'text', nullable: true }) ad: string;
}
