import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Note extends BaseEntity {
  @Column({ type: 'text', nullable: true }) note: string;
}
