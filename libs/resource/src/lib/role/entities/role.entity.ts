import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Role extends BaseEntity {
  @Column({ type: 'text', nullable: true }) role: string;
}
