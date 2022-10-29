import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Feature extends BaseEntity {
  @Column({ type: 'text', nullable: true }) feature: string;
}
