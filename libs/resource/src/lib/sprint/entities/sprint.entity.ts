import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Sprint extends BaseEntity {
  @Column({ type: 'text', nullable: true }) sprint: string;
}
