import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Blog extends BaseEntity {
  @Column({ type: 'text', nullable: true }) blog: string;
}
