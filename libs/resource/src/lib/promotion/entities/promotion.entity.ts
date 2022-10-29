import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Promotion extends BaseEntity {
  @Column({ type: 'text', nullable: true }) promotion: string;
}
