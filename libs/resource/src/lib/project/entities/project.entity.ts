import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Project extends BaseEntity {
  @Column({ type: 'text', nullable: true }) project: string;
}
