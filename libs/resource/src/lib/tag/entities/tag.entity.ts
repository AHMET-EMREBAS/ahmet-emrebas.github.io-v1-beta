import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Tag extends BaseEntity {
  @Column({ type: 'text', nullable: true }) tag: string;
}
