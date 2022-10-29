import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Permission extends BaseEntity {
  @Column({ type: 'text', nullable: true }) permission: string;
}
