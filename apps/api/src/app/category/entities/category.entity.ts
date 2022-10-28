import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'text', nullable: true }) category: string;
}
