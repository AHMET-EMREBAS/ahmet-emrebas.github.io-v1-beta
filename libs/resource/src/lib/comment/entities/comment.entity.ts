import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Comment extends BaseEntity {
  @Column({ type: 'text', nullable: true }) comment: string;
}
