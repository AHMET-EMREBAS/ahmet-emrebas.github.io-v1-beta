import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Issue extends BaseEntity {
  @Column({ type: 'text', nullable: true }) issue: string;
}
