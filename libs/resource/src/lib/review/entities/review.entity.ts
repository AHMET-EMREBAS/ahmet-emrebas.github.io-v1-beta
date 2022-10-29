import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Review extends BaseEntity {
  @Column({ type: 'text', nullable: true }) review: string;
}
