import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Log extends BaseEntity {
  @Column({ type: 'text', nullable: true }) log: string;
}
