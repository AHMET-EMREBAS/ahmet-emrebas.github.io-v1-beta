import { BaseEntity } from 'core';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'text', nullable: true }) user: string;
}
